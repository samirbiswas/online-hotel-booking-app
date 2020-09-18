import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const [newUser, setNewUser] =useState(false);
  const [user, setUser] = useState({
    isSign :false,
    name :'',
    email :'',
    password :'',
    photo:'',
    error:'',
    success: false

  })
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    const googleHandleClicked = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
           console.log(displayName,email);
           const signInUser = {displayName, email};
           setLoggedInUser(signInUser);
           history.replace(from);
           
            
        })
          .catch(error=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          })
       }
    
       const facebookHandleClicked =()=>{
        firebase.auth().signInWithPopup(fbprovider)
        .then(res=>{
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            
            // The signed-in user info.
            const {displayName, email} = res.user;
            const signInUser = {displayName, email};
            setLoggedInUser(signInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
                console.log(errorMessage,errorCode);
            
          });


       }
       const handleChange = (e) =>{
          
           let fromValid = true;
            if(e.target.name === 'email'){

         fromValid = /\S+@\S+\.\S+/.test(e.target.value);
         
    
    }
        if(e.target.name === 'password'){

            const isValidPassword1 = e.target.value.length > 4;
            const isValidPassword2 = /\d{1}/.test(e.target.value);
            fromValid = isValidPassword1 && isValidPassword2;
        }

        if(fromValid){
        const newUserInfo ={...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        }

       }
const handleSubmit =(e)=>{
    if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            console.log(res);
            const newUserInfo ={...user};
            newUserInfo.error ='';
            newUserInfo.success= true;
            setUser(newUserInfo);
            updateName(user.name);
            
        })
       .catch(error=>{
        const newUserInfo = {...user};
        newUserInfo.error= error.message;
        newUserInfo.success= false;
        setUser(newUserInfo);

       })
    } 
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
          const newUserInfo = {...user};
          newUserInfo.error ='';
          newUserInfo.success =true;
          setUser(newUserInfo);
          console.log('sign in user info', res.user);
          const {displayName, email} = res.user;
          const signInUser = {displayName, email};
          setLoggedInUser(signInUser);
          history.replace(from);

        })
        .catch(error=> {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

        })
      }

    e.preventDefault();
}

const updateName = (name)=>{
    console.log("Name",name);
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
     
    }).then(res=>{
        
    })
    
    .catch(function(error) {
      console.log(error);
    });
  
  }





    return (
      
        <div className="login-info">
            <h4>Create User</h4>
            <br/>
            <div>
                <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
                        <label htmlFor="newUser">Sign Up Here </label>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                {newUser && <input className="form-group" type="text" name="name" onBlur={handleChange} placeholder="Enter your name" required/>}
                  </div>
                  <div className="form-group">
                  <input className="form-group" type="text" name="email" onBlur={handleChange} placeholder="Enter your email " required/>
                    </div>
                    <div className="form-group">
                    <input className="form-group" type="password" name="password" onBlur={handleChange} placeholder="Enter your password" required/>
                      </div>
                    
                      <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p style={{color:'red'}}>{user.error}</p>
                {user.success && <p style={{color:'green'}}>User {newUser ? 'created' :'Logged IN'} Successfully</p>}
                 
            </div>
            
            <div className="icon-settings d-flex justify-content-between">
              <img onClick={googleHandleClicked}  src="https://i.imgur.com/VUiCSkt.png"  alt=""/>
              
              <img onClick={facebookHandleClicked} src="https://i.imgur.com/kj9UFt0.png" alt=""/>
  
            </div>
            
        </div>
      
    );
};

export default Login;