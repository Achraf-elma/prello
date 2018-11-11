// Modules
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

// Board
import BoardToConnect from './BoardViewHandler';

// Store
import boardStore from '../../boardStore';

// Socket
import { socket, socketConnect } from '../../request/socket';

class ConnectedBoard extends React.Component {
  componentDidMount() {
    let socket = socketConnect();
    socket.on("dispatch", (action) => boardStore.dispatch(action));
  }

  componentWillUnmount() {
    // let socket = socket().socket;
    // socket && socket.disconnect();
  }

  render(){
    const {
      match
    } = this.props;
    console.log(match)
    return (
      <Provider store={boardStore}>
        <Route path={`${match.path}/:idBoard`} component={BoardToConnect}/>
      </Provider>
    );
  }
}
export default ConnectedBoard; 