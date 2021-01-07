import React from "react";
import Landingpage from "./components/landingpage/Landingpage";
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from "./components/loginpage/Login"

const App = ()=>{

  return(
  <div className="App">
    <Switch>
      <Route path="/" exact component={Landingpage}/>
      <Route path="/login" component = {Login}/> 
    </Switch>
  </div>)
};

export default App;