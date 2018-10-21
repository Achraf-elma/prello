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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import List from './../../Component/List/List';
import ListWIP from './../../Component/List/ListWIP';
import ListCreator from './../../Component/ListCreator';
import WIP from './../../Component/WIP';
import WIP2 from './../../Component/Board/WIP2';
// Components
import { Container, Row, Col } from 'reactstrap';


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
  <table>
  <tr>
     <ListCreator addList={(listName) => dispatchAddListToBoard(listName)} />
     <DragDropContext onDragEnd={( result ) => dispatchOnDragEnd( result )}>
     <Droppable droppableId="droppable" direction="horizontal">
     {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={classNames("board-lists", { "list-dragging-over": snapshot.isDraggingOver })}
              {...provided.droppableProps}
            >
      
       
          {lists.map((list, index) => ( 
                <Draggable key={list.id} draggableId={list.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classNames(
                      "list-item",
                      { "list-dragged": snapshot.isDragging }
                    )}
                  >
                     <td>
                     <List name={list.name}/>  
                     </td>
                  </div>
                )}
              </Draggable>
          ) )} 
     
        
        </div>
          )}
        </Droppable>
        </DragDropContext>
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

const mapDispatchToProps = (dispatch, props) => ({
  dispatch,
  dispatchOnDragEnd: ({source, destination}) => (
    destination &&
    dispatch(moveListInBoard(source.index, destination.index))
  ),
  dispatchAddListToBoard: (listName) => dispatch(addListToBoard(listName))
});

// TODO: Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 