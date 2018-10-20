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
import NavBar from './Component/NavBar/NavBar';
//import CheckItem from './Component/CheckList/CheckItem';
//import Card from './Component/Card/Card';
import Homepage from './Component/homepage';
import FeaturesInfo from './Component/featuresInfo';
import CheckItem from './Component/CheckList/CheckItem';
import Card from './Component/Card/Card';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar navBarBrend="Prello" currentPage="Board 1" navLink= "My Boards" navMyAccount="My Account" navLogOut="Log Out"/>
        <Provider store={store}>
          <Homepage  />
        </Provider>
  
      </div>
    );
  }
}

export default App;
