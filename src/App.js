// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Style
import './style/App.css';

// Store
import store from './store';

// Components
import CheckItem from './Component/CheckList/CheckItem';
import List from './Component/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CheckItem id={"1"} />
        </Provider>
        <Provider store={store}>
          <List id={"1"} />
        </Provider>
      </div>
    );
  }
}

export default App;
