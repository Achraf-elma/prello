// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, ButtonGroup, Button, Modal, ModalBody } from 'reactstrap';
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
                <div className="boards">
                    <Button onClick={this.toggle} className="create"> Create a Board</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalBody>
                            <BoardCreator closeToogle={this.toggleModal}  handleSubmit={this.addingBoard.bind(this)}></BoardCreator>
                        </ModalBody>
                    </Modal>
                    <div>
                    <div className="namelist">
                    Private Boards
                        </div>
                        <div className="boardlist">
                            {privateBoards.map((board) => (
                                    <Card key={board.id} className="boards">
                                        <CardTitle>{board.name}</CardTitle>
                                        <CardSubtitle>Description</CardSubtitle>
                                        <CardBody>
                                            <p>{board.description}</p>
                                            <ul>
                                                <li> {board.nbCardsDue} Cards due </li>
                                                <li> {board.nbCardsDone} Cards done </li>
                                                <li> {board.nbCardsExpired} Cards expired </li>
                                            </ul>
                                        </CardBody> 
                                        <ButtonGroup className="buttons">

                                            <Link to={`/board/${board.id}`} activeClassName="active">
                                                <Button>View</Button>
                                            </Link>
                                            <Button onClick ={() => dispatchCloseBoardFromBoards(board.id, true)} >Delete</Button>
                                        </ButtonGroup>
                                        
                                    </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="namelist">
                        Public Boards
                        </div>
                        <div className="boardlist">
                        {publicBoards.map((board) => (
                                <Card key={board.id} className="boards">
                                    <CardTitle>{board.name}</CardTitle>
                                    <CardSubtitle>Description</CardSubtitle>
                                    <CardBody>
                                        <p>{board.description}</p>
                                        <ul>
                                            <li> {board.nbCardsDue} Cards due </li>
                                            <li> {board.nbCardsDone} Cards done </li>
                                            <li> {board.nbCardsExpired} Cards expired </li>
                                        </ul>
                                    </CardBody> 
                                    <ButtonGroup className="buttons">

                                        <Link to={`/board/${board.id}`} activeClassName="active">
                                            <Button>View</Button>
                                        </Link>
                                        <Button onClick ={() => dispatchCloseBoardFromBoards(board.id, true)} >Delete</Button>
                                    </ButtonGroup>
                                    
                                </Card>
                        ))}
                    </div>
                    </div>
                    
                </div>
            
        );
    }
}

// Export connected Components
const mapStateToProps = (state, props) => ({
    publicBoards: state.boards.filter(board => (board.closed==false)&&(board.isPrivate==false)),
    privateBoards: state.boards.filter(board => (board.closed==false)&&(board.isPrivate==true))
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
            addBoardToBoards(data.get('name'), data.get('desc', data.get('privacy', data.get('members'), data.get('owners'))))
        )
    }
  })
  

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Home); 