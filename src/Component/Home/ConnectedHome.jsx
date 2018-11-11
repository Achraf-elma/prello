// Module
import React from 'react';
import {Provider} from 'react-redux';

// Component
import Home from './Home';

// Store
import store from '../../homeStore';

const ConnectedHome = (props) => (
  <Provider store={store}>
    <Home {...props} />
  </Provider>
);

export default ConnectedHome;