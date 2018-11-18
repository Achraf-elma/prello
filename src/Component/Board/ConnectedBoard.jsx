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
  joinBoard = () => (
    socketConnection.instance.emit('board', this.props.match.params.idBoard)
  )
  dispatch = (action) => boardStore.dispatch(action);
  componentDidMount() {

    let socket = socketConnection.instance.connect()
    socket.on('connect', this.joinBoard);
    socket.on("dispatch", this.dispatch);
  }

  componentDidUpdate() {
    socketConnection.instance.removeListener('connect', this.joinBoard)
    socketConnection.instance.removeListener('dispatch', this.dispatch)
    socketConnection.instance.on('connect', this.joinBoard);
    socketConnection.instance.on("dispatch", this.dispatch);
  }

  componentWillUnmount() {
    socketConnection.instance.removeListener('connect', this.joinBoard)
    socketConnection.instance.removeListener('dispatch', this.dispatch)
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