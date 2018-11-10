// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
// Style
import './style/App.css';

// Store
import store from './store';

// Components

import NavBar from './Component/NavBar/NavBar';
import Homepage from './Component/Homepage/Homepage';

import Home from './Component/Home/Home';
import BoardViewHandler from './Component/Board/BoardViewHandler';

import LoginCard from './Component/Login/LoginCard';
import SignupCard from './Component/Login/SignupCard';

import OrgHome from './Component/Organization/OrgHome';
import OrganizationViewHandler from './Component/Organization/OrganizationViewHandler';
import AccountViewHandler from './Component/Account/AccountViewHandler';

//test
class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
            <Router>
              <div>
                <Route component={NavBar}/>
                <Route exact path='/' component={Homepage}/>
                <Route path='/login' component={LoginCard} />
                <Route path='/signup' component={SignupCard} />
                <Route path='/board/:boardId' component={BoardViewHandler}/>               
                <Route path='/home' component={Home}/>
                <Route path='/organization' component={OrgHome}/>
                <Route path='/organization/:organizationId' component={OrganizationViewHandler}/>
                <Route path='/members/:idMember' component={AccountViewHandler} />
              </div>
            </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
