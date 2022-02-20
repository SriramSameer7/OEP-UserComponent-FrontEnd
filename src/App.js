import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './UserComponent/Navbar';
import Home from './UserComponent/Home';
import Login from './UserComponent/Login';
import Signup from './UserComponent/Signup';





  

const App = () => {
  
  return (
    <>

    <Navbar />
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
    </Switch>
    </>
  )
}



export default App;

