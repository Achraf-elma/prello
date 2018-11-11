// Modules
import React from 'react';
import {Provider} from 'react-redux';

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
    socket().socket.disconnect();
  }

  render(){
    return (
      <Provider store={boardStore}>
        <BoardToConnect {...this.props} />
      </Provider>
    );
  }
}
export default ConnectedBoard; 