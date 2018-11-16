// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Modal, ModalBody,  Row, Col, Container} from 'reactstrap';
import BoardCreator from '../BoardList/BoardCreator';
import { ObjectId } from 'bson';

// Action builder
import { setBoardList, addBoardToBoards} from '../../action/actionBoardList';
import { setBoardClose } from '../../action/actionBoard';

// http
import client from '../../request/client';
import { fetchUserBoards } from '../../request/user';
import { createBoard } from '../../request/board';

// Components
import BoardList from '../BoardList/BoardList';

// Styles
import '../../style/App.css';
import '../../style/home.css';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount(){
    // Fetch boards from database
    fetchUserBoards()
    .then( boardList => this.props.dispatchSetBoardList( boardList ))
    .catch(error => console.error(error) || this.props.history.push('/login'))
  }

  filterRecent = (boards) => boards.slice(0,3);
  filterMyboard = (boards) => boards.filter(({idOwner}) => idOwner === client.me)
  toggle = () => this.setState({ modal: !this.state.modal });
  toggleModal = () => this.setState({ modal: !this.state.modal });
  addingBoard(event){
    event.preventDefault();
    const data = new FormData(event.target);
    let newBoard = {
      id: new ObjectId(),
      name: data.get('name'),
      desc: data.get('desc'),
      isPublic: data.get('isPublic') === "true",
      members: data.get('members'),
    };;
    createBoard(newBoard)
      .then(board => this.props.dispatchAddBoardToBoards( board ))
      .catch( error => console.error(error))
    this.toggleModal();
  }
  render() {
    return (
      <div>
        <div className="background"/>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <BoardCreator closeToogle={this.toggleModal}  handleSubmit={this.addingBoard.bind(this)}></BoardCreator>
          </ModalBody>
        </Modal>
        <Container className="boardlistHeader">
          <Row>
            <Col>
              <button className="createBoardButton" onClick={this.toggle}>Create a Board</button>
            </Col>
          </Row>
        </Container>
        <BoardList
          boardListTitle="Recently Opened"
          boardFilter={this.filterRecent}
        />
        <BoardList
          boardListTitle="All boards"
        />
        <BoardList
          boardListTitle="My boards"
          boardFilter={this.filterMyboard}
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