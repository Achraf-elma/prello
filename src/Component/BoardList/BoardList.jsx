// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, ButtonGroup, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Action builder
import { removeBoardFromBoards, updateBoard, addBoardToBoards} from '../../action/actionBoardList';
import { setBoardClose} from '../../action/actionBoard';

// Components

// Styles
import '../../style/boardList.css';

class BoardList extends React.Component{

    constructor(props) {
        super(props);
        /*this.state = {
            boards: this.props.boards.filter(board => board.closed==false),
        }*/
    }
    /*isOwner(){
        let owners = this.state.owners
    }*/
    render(){
        const {
            boards,
            removeBoardFromBoards,
            updateBoard,
            addBoardToBoards,
            dispatchCloseBoardFromBoards

        }
         = this.props;
        return (
            <div>
                <div className="namelist">
                {this.props.boardListName}
                </div>
                <div className="boardlist">
                    {boards.map((board) => (
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
        );
    }

}

const mapStateToProps = (state, props) => ({
    boards: state.boards.filter(board => board.closed==false),
    owners: state.boardListName,
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    dispatchCloseBoardFromBoards: (idBoardToRemove, closed) => {
        console.log(idBoardToRemove)
        console.log('--------')
        console.log(closed)
        dispatch(setBoardClose(idBoardToRemove, closed))
    }
  })
  

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardList); 