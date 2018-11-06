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

 onCheckboxBtnClick(selected) {
  const index = this.state.cSelected.indexOf(selected);
  if (index < 0) {
    this.state.cSelected.push(selected);
  } else {
    this.state.cSelected.splice(index, 1);
  }
  this.setState({ isBoardViewChoosen : [...this.state.cSelected] });
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