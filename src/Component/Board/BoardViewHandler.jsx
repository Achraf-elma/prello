// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
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

class BoardViewHandler extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isBoardViewChoosen : true
    }
    this.setViewChoosen = this.setViewChoosen.bind(this)
  }

 setViewChoosen = (isBoardViewChoosen) =>  {
  this.setState({
    isBoardViewChoosen: isBoardViewChoosen
  })
 }

render() { 
  const { viewChoosen = true } = this.props
return (
  <div>
  <div className="board-background"/>
  <div className="container">
  <div className="row board-info">
    <div className="col">
    <h1 className="board-title"><i className="fa fa-tasks"></i> My board</h1>
    </div>
   
    <div className="col">
       <button onClick={() => this.setViewChoosen(!this.state.isBoardViewChoosen)}>Calendar View</button>
    </div>
  </div>
 
  <hr className="separator" />
{this.state.isBoardViewChoosen ? <CalendarView/> : <Board/>}

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