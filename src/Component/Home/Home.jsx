// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Container} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { ObjectId } from 'bson';

// Action builder
import { setBoardList, addBoardToBoards} from '../../action/actionBoardList';
import { setBoardClose } from '../../action/actionBoard';

// http
import client from '../../request/client';
import { fetchUserBoards } from '../../request/user';
import { createBoard, closeBoard } from '../../request/board';

// Components
import BoardCreator from '../BoardList/BoardCreator';
import BoardList from '../BoardList/BoardList';

// Styles
import '../../style/App.css';
import '../../style/home.css';

class Home extends React.Component{
  componentDidMount(){
    // Fetch boards from database
    fetchUserBoards()
    .then( boardList => this.props.dispatchSetBoardList( boardList ))
    .catch(error => console.error(error) || this.props.history.push('/login'))
  }

  closeBoard = (idBoard, closed) => {
    closeBoard(idBoard)
      .then(done => this.props.dispatchCloseBoardFromBoards(idBoard, closed))
      .catch( error => console.error( error ))
  }

  filterRecent = (boards) => boards.slice(0,3);
  filterMyboard = (boards) => boards.filter(({idOwner}) => idOwner === client.me);
  addingBoard = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if( data.get("name")){
      let newBoard = {
        id: new ObjectId(),
        name: data.get('name'),
        desc: data.get('desc'),
        isPublic: data.get('isPublic') === "true",
        members: data.get('members'),
      };
      createBoard(newBoard)
        .then(board => this.props.dispatchAddBoardToBoards( board ))
        .catch( error => console.error(error))
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <div className="background"/>
        <Route path={`${match.path}/addBoard`}
          render={(props) => (<BoardCreator {...props} handleSubmit={this.addingBoard} />)}
        />
        <Container className="boardlistHeader">
          <Row className="upperBar">
            <Col >
              <Link className="createBoardButton" to={`${match.url}/addBoard`}>Create a Board</Link>
            </Col>
          </Row>
        </Container>
        <BoardList
          boardListTitle="Recently Opened"
          boardFilter={this.filterRecent}
          dispatchCloseBoardFromBoards={this.closeBoard}
        />
        <BoardList
          boardListTitle="All boards"
          dispatchCloseBoardFromBoards={this.closeBoard}
        />
      </div>
    );
  }
}

// Export connected Components
const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetBoardList: (boardList) => dispatch(setBoardList(boardList)),
  dispatchCloseBoardFromBoards: (idBoardToRemove, closed) => dispatch(setBoardClose(idBoardToRemove, closed)),
  dispatchAddBoardToBoards: (newBoard) => dispatch(addBoardToBoards(newBoard))
});
// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Home); 