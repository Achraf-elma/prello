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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <WIP />
        </Provider>
      </div>
    );
  }
}

export default App;
