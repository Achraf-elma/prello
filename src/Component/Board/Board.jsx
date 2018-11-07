// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { moveListInBoard, addListToBoard} from '../../action/actionBoard';

// Components
import List from './../../Component/List/List';
import ListCreator from '../Creator/ListCreator';

// Styles
import '../../style/board.css';


class Board extends React.Component{

  constructor(props) {
    super(props);
  }

  render() { 
    const {
      lists,
      dispatchOnDragEnd,
      dispatchAddListToBoard }
  = this.props;
  return (
  <div>
    <ListCreator addList={(listName) => dispatchAddListToBoard(listName)} />
    <table className="listLists">
    <tr>
      <DragDropContext onDragEnd={( result ) => dispatchOnDragEnd( result )}>
      <Droppable droppableId="droppable" direction="horizontal">
      {(provided, snapshot) => (
              <span
                ref={provided.innerRef}
                className={classNames("board-lists", { "list-dragging-over": snapshot.isDraggingOver })}
                {...provided.droppableProps}>
            {lists.map((list, index) => ( 
                  <Draggable key={list.idList} draggableId={list.idList} index={index}>
                  {(provided, snapshot) => (
                    <span
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={classNames(
                        "list-item",
                        { "list-dragged": snapshot.isDragging }
                      )}
                    >
                      <td>
                      <List idList={list.idList} name={list.name}/>  
                      </td>
                    </span>
                  )}
                </Draggable>
            ) )} 
      
          
          </span>
            )}
          </Droppable>
          </DragDropContext>
          </tr>
          </table>

  </div>
    );
  }
}

const mapStateToProps = ( state, props, ownProps ) => ({
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

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 