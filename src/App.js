// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Style
import './style/App.css';
import "./style/board.css";

// Store
import store from './store';

// Components
import WIP from './Component/WIP';
<<<<<<< HEAD
import NavBar from './Component/NavBar/NavBar';
//import CheckItem from './Component/CheckList/CheckItem';
//import Card from './Component/Card/Card';
=======
import Homepage from './Component/homepage';
import CheckItem from './Component/CheckList/CheckItem';
import Card from './Component/Card/Card';
>>>>>>> [WIP] adding homepage

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar navBarBrend="Prello" currentPage="Board 1" navLink= "My Boards" navMyAccount="My Account" navLogOut="Log Out"/>
        <Provider store={store}>
          <WIP />
        </Provider>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </div>
    );
  }
}

export default App;
