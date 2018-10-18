// Modules
import React from 'react';
import { connect } from 'react-redux';

// Socket
import { socket, socketConnect, socketDispatch } from '../../socket';

// Reducers 
import board from '../../reducer/board';
import checkItem from '../../reducer/checkItem';
import checkList from '../../reducer/checklist';
import list from '../../reducer/list';
import lists from '../../reducer/lists';
import organization from '../../reducer/organization';
import card from '../../reducer/card';

const store = createStore(
  combineReducers({
    lists,
    list,
    checkItem,
    checkList,
    board,
    organization,
    card
  }),
  applyMiddleware(socketDispatch)
  // , require('./bootstrap.json');
);



class ConnectedBoard extends React.Component {
  componentDidMount() {
    let socket = socketConnect();
    socket.on("dispatch", (action) => store.dispatch(action));
  }

  componentWillUnmount() {
    socket().socket.disconnect();
  }

  render(){
    return (
      <Provider store={store}>
        <Board {...this.props} />
      </Provider>
    );
  }
}
