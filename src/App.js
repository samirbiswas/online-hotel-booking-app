import React, { createContext, useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
}
from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Room from './components/Room/Room';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()



function App() {
  const [loggesinUser, setLoggedInUser] = useState({})
  return (
   
      <UserContext.Provider value={[loggesinUser, setLoggedInUser]}>
    <Router>
  <h4>{loggesinUser.displayName}</h4>
     <Header></Header>
    
       <Switch>
         <Route exact path='/'>
         <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
           </Route>

         <Route path="/blog">
         <Blog></Blog>

         </Route>
         <Route path="/room/:roomId">
         <Details></Details>

         </Route>
         <PrivateRoute path="/book/:bedType">
         <Room></Room>
         </PrivateRoute>
        
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
