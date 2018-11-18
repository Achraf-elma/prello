// Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Style
import './style/App.css';

// Components
import NavBar from './Component/NavBar/NavBar';
import Homepage from './Component/Homepage/Homepage';

import Home from './Component/Home/ConnectedHome';
import ConnectedBoard from './Component/Board/ConnectedBoard';

import LoginCard from './Component/Login/LoginCard';
import SignupCard from './Component/Login/SignupCard';
import LogoutCard from './Component/Login/LogoutCard';

import Organization from './Component/Organization/ConnectedOrganization';
import AccountViewHandler from './Component/Account/AccountViewHandler';
import CookieConsent from "react-cookie-consent";



//test
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route component={NavBar}/>
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/login' component={LoginCard} />
            <Route path='/signup' component={SignupCard} />
            <Route path='/logout' component={LogoutCard} />
            <Route path='/board/:idBoard' component={ConnectedBoard}/>
            <Route path='/home' component={Home}/>
            <Route path='/members/me' component={AccountViewHandler} />
            <Organization />
          </Switch>
        </div>
      </Router>
       <CookieConsent  buttonStyle={{ color: "#4e503b", fontSize: "13px", cursor: "pointer" }}>
        This website uses cookies to enhance the user experience.
       </CookieConsent>
      </div>
    );
  }
}

export default App;
