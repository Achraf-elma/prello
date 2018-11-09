// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, CardHeader, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, ButtonGroup, Button, Modal, ModalBody,  Row, Col, Container} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BoardCreator from '../Creator/BoardCreator';

// Action builder
import { removeBoardFromBoards, updateBoard, addBoardToBoards} from '../../action/actionBoardList';
import { setBoardClose} from '../../action/actionBoard';
// Action builder



// Components
import BoardList from '../BoardList/BoardList';
//import TeamList from './../../Component/TeamList';
//import BoardForm from './../../Component/BoardForm';
//import TeamForm from './../../Component/TeamForm';
import BoardCard from './BoardCard'
// Styles
import '../../style/home.css';

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }
    addingBoard(event){
        console.log("addingBoard EVENT: ", event);
        this.props.dispatchAddBoardToBoards(event);
        this.toggleModal();
    }
    render() { 
        const {
            publicBoards,
            privateBoards,
            removeBoardFromBoards,
            updateBoard,
            addBoardToBoards,
            dispatchCloseBoardFromBoards,
            dispatchAddBoardToBoards
        }
         = this.props;

        return (
<div>
<div className="boards-background"/>
<Modal isOpen={this.state.modal} toggle={this.toggle}>
<ModalBody>
<BoardCreator closeToogle={this.toggleModal}  handleSubmit={this.addingBoard.bind(this)}></BoardCreator>
</ModalBody>
</Modal>
<Container className="boardlistHeader">
<Row>
<Col>
<button class="createBoardButton" onClick={this.toggle}>Create a Board</button>
</Col>
</Row>
<Row>
<Col>
<h1 className="loginTitle"><i className="fa fa-tasks"></i> Recently Opened</h1>
</Col>
</Row>
<hr className="separator" />
</Container>
<Container className="boardlist">
<Row>
{privateBoards.map((board) => (
    <BoardCard key={board.boardId} closeBoard = {dispatchCloseBoardFromBoards} board = {board}/>
))}
</Row>
</Container>
</div>
                
        );
    }
}

// Export connected Components
const mapStateToProps = (state, props) => ({
    publicBoards: state.boards.filter(board => (board.closed === false)&&(board.isPublic === false)),
    privateBoards: state.boards.filter(board => (board.closed === false)&&(board.isPublic === true))
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    dispatchCloseBoardFromBoards: (idBoardToRemove, closed) => {
        console.log(idBoardToRemove)
        console.log('--------')
        console.log(closed)
        dispatch(setBoardClose(idBoardToRemove, closed))
    },
    dispatchAddBoardToBoards: (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        dispatch(
            addBoardToBoards(data.get('name'), data.get('desc'), data.get('isPublic') === "true", data.get('members'), data.get('owners'))
        )
    }
  })
  

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Home); 