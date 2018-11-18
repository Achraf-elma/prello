// Modules
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

// Board
import BoardToConnect from './BoardViewHandler';

// Store
import boardStore from '../../boardStore';

// Socket
import { socketConnection } from '../../request/socket';

class ConnectedBoard extends React.Component {
  componentDidMount() {
    let socket = socketConnection.instance.connect()
    socket.on('connect', () => (
      socket.emit('board', this.props.match.params.idBoard)
    ));
    socket.on("dispatch", (action) => boardStore.dispatch(action));
  }

  componentWillUnmount() {
    socketConnection.instance.disconnect();
  }

  render(){
    const {
      match
    } = this.props;
    return (
      <Provider store={boardStore}>
        <Route path={match.path} component={BoardToConnect}/>
      </Provider>
    );
  }
}
export default ConnectedBoard; 