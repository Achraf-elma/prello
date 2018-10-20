// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Style
import './style/App.css';



// Store
import store from './store';

// Components
import WIP from './Component/WIP';
import NavBar from './Component/NavBar/NavBar';
import Homepage from './Component/Homepage/Homepage';



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
