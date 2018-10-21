// Modules
// TODO: Import react (it avert the transpiler it needs JSX )
import React from 'react';
// TODO: Import connect from react-redux
import {connect} from 'react-redux';
import '../../style/board.css';
// Action builder
// TODO: Import action builder
import {setBoardClose} from './../../action/actionBoard';
import {setBoardDesc} from './../../action/actionBoard';
import { moveListInBoard, addListToBoard} from '../../action/actionBoard';

import List from './../../Component/List/List';
import ListCreator from './../../Component/ListCreator';
import WIP from './../../Component/WIP';
import WIP2 from './../../Component/Board/WIP2';
// Components
import { Container, Row, Col } from 'reactstrap';

import {DragDropContext} from 'react-beautiful-dnd';
// Components
// TODO: Import direct children components
//import list when implemented

class Board extends React.Component{

  constructor(props) {
    super(props);
  
  }

render() { 
  const {
    name, 
  desc, 
  closed, 
  pos, 
  lists,
    dispatchOnDragEnd,
    dispatchAddListToBoard,
  setBoardClose, 
  setBoardDesc }
 = this.props;
return (
  

  <div className="container">
  <div class="row board-info">
    <div class="col">
    <h1 className="board-title"><i class="fa fa-tasks"></i> {name}</h1>
    </div>
   
    <div class="col">
       
    </div>
  </div>
 
  <hr className="separator" />

     <ListCreator addList={(listName) => dispatchAddListToBoard(listName)} />
      <table>
        <tr>
          {lists.map((list, index) => ( 
               <td>
                  <List name={list.name}/>  
               </td>
          ) )} 
        </tr>
  

        </table>
 


      

</div>
);
}
}

const mapStateToProps = ( state, props ) => ({
    // TODO: Add store state to the component props
  name: state.board.name,
  lists: state.lists,
  desc: state.board.desc,
  memberships: state.board.memberships,
  closed: state.board.closed,
  pos: state.board.pos,
})

const mapDispatchToProps = ( dispatch, props ) => ({
  //TODO: Add
  setBoardClose: (closed) => dispatch(setBoardClose(props.id, closed)),
  setBoardDesc: (event) => dispatch(setBoardDesc(props.id, event.target.value)),
  dispatchAddListToBoard: (listName) => dispatch(addListToBoard(listName))
})

// TODO: Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 