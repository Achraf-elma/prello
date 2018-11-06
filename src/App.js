// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Style
import './style/App.css';



// Store
import store from './store';

// Components
import WIP from './Component/WIP';
import NavBar from './Component/NavBar/NavBar';

import Homepage from './Component/Homepage/Homepage';
import BoardViewHandler from './Component/Board/BoardViewHandler';
import Home from './Component/Home/Home';

import LoginCard from './Component/Login/LoginCard';
import SignupCard from './Component/Login/SignupCard';
//import ConnectedBoard from './Component/Board/ConnectedBoard';

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
              </div>
            </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
