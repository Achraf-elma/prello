// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { Container, Row, Col , Button, ButtonGroup} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { moveListInBoard, addListToBoard} from '../../action/actionBoard';
import {setBoardClose} from '../../action/actionBoard';
import {setBoardDesc} from '../../action/actionBoard';


// Components

import List from '../List/List';
import ListWIP from '../List/ListWIP';
import ListCreator from '../Creator/ListCreator';
import WIP from '../WIP';


// Styles
import '../../style/board.css';
import CalendarView from './CalendarView';
import Board from './Board';
import {fetchBoard} from '../../request/board'

class BoardViewHandler extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isBoardViewChoosen: true,
      boardId: this.props.match.params.boardId
    }
    this.setViewChoosen = this.setViewChoosen.bind(this)
  }

  componentDidMount(){
    fetchBoard(this.state.boardId)
    .then(board => {

    })
    .catch(err => console.error(err));
  }
 setViewChoosen = (isBoardViewChoosen) =>  {
  this.setState({
    isBoardViewChoosen: isBoardViewChoosen
  })
 }

render() { 
  const { 
    boardId,
  } = this.props
return (
  <div>
  <div className="board-background"/>
  <div className="container">
  <div className="row board-info">
    <div className="col">
    <h1 className="board-title"><i className="fa fa-tasks"></i> My board</h1>
    </div>
   
    <div className="col">
        <Button color="primary" onClick={() => this.setViewChoosen(!this.state.isBoardViewChoosen)} active={this.state.isBoardViewChoosen}>Calendar View</Button>
    </div>
  </div>
 
  <hr className="separator" />

{this.state.isBoardViewChoosen ?   <Board/> : <CalendarView/>}

</div>
</div>
);
}
}

const mapStateToProps = ( state, props ) => ({
})

const mapDispatchToProps = (dispatch, props) => ({

});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardViewHandler); 