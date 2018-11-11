// Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Router>
          <div>
            <Route component={NavBar}/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/login' component={LoginCard} />
            <Route path='/signup' component={SignupCard} />
            <Route path='/board/:boardId' component={ConnectedBoard}/>
            <Route path='/home' component={Home}/>
            <Route path='/members/:idMember' component={AccountViewHandler} />
            <Organization />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
