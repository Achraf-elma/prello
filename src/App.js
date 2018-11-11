// Modules
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Style
import './style/App.css';

// Components
import NavBar from './Component/NavBar/NavBar';
import Homepage from './Component/Homepage/Homepage';

import Home from './Component/Home/ConnectedHome';
import ConnectedBoard from './Component/Board/ConnectedBoard';

import LoginCard from './Component/Login/LoginCard';
import SignupCard from './Component/Login/SignupCard';

import Organization from './Component/Organization/ConnectedOrganization';
import AccountViewHandler from './Component/Account/AccountViewHandler';

//test
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <div>
            <Route component={NavBar}/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/login' component={LoginCard} />
            <Route path='/signup' component={SignupCard} />
            <Route path='/board/:idBoard' component={ConnectedBoard}/>
            <Route path='/home' component={Home}/>
            <Route path='/members/me' component={AccountViewHandler} />
            <Organization />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
