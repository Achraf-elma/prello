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
    console.log("before");
    let socket = socketConnection.instance.connect(() => console.log("done"));
    console.log("after");
    socket.on("dispatch", (action) => boardStore.dispatch(action));
  }

  componentWillUnmount() {
    socketConnection.instance.disconnect();
  }

  render(){
    const {
      match
    } = this.props;
    console.log(match)
    return (
      <Provider store={boardStore}>
        <Route path={match.path} component={BoardToConnect}/>
      </Provider>
    );
  }
}
export default ConnectedBoard; 