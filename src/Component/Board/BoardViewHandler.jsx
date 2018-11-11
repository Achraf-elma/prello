// Modules
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';


// Action builder
import { setBoard} from '../../action/actionBoard';
import { setLists } from '../../action/actionLists';
import { setCards } from '../../action/actionCards';

// Components
import CalendarView from './CalendarView';
import Board from './Board';

// Requests
import {fetchBoard, fetchBoardLists, fetchBoardCards} from '../../request/board'

// Styles
import '../../style/board.css';



class BoardViewHandler extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isBoardViewChoosen: true,
      boardId: this.props.match.params.boardId
    }
    this.setViewChoosen = this.setViewChoosen.bind(this)
  }

  componentDidMount() {
    fetchBoard(this.state.boardId)
      .then(board => {
        this.props.dispatchSetBoard(board)
       })
      .catch(err => console.error(err));

    fetchBoardLists(this.state.boardId)
      .then(lists => {
        this.props.dispatchSetLists(lists)
      })
      .catch(err => console.error(err));

    fetchBoardCards(this.state.boardId)
      .then(cards => {
        this.props.dispatchSetCards(cards)
      })
      .catch(err => console.error(err));
  }

  setViewChoosen = (isBoardViewChoosen) =>  {
    this.setState({
      isBoardViewChoosen: isBoardViewChoosen
    })
  }

  render() { 
    const{ board } = this.props;
  return (
    <div>
      <div className="board-background"/>
        <div className="container">
          <div className="row board-info">
            <div className="col">
              <h1 className="board-title"><i className="fa fa-tasks"></i> {board.id} {board.name}</h1>
            </div>
            <div className="col">
              <Button color="primary" onClick={() => this.setViewChoosen(!this.state.isBoardViewChoosen)} active={this.state.isBoardViewChoosen}>Calendar View</Button>
            </div>
          </div>
          <hr className="separator" />
          {this.state.isBoardViewChoosen ?   <Board idBoard ={board.id}/> : <CalendarView/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  board : state.boards.find(board => board.id == props.match.params.boardId)
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetBoard : (board) => dispatch(setBoard(board)),
  dispatchSetLists : (lists) => dispatch(setLists(lists)),
  dispatchSetCards : (cards) => dispatch(setCards(cards))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardViewHandler); 