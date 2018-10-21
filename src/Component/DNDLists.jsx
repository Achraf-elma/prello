// Modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { socket, socketConnect } from '../socket';

// Styling

// Action builder
import { moveListInBoard, addListToBoard} from '../action/actionBoard';
import { createList} from '../action/actionList';

// Components
import ListCreator from './ListCreator';
import List from './List/List';


class WIP extends React.Component{
  componentDidMount() {
    let socket = socketConnect();
    socket.on("dispatch", (action)=> this.props.dispatch(action));
  }

  componentWillUnmount(){
    socket().socket.disconnect();
  }

  render(){
    const {
      lists,
        dispatchOnDragEnd,
        dispatchAddListToBoard
    } = this.props;
    return (
      <div>


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
                     <List name={list.name} />
                    </div>
                  )}
                </Draggable>
              ))}
         
      
            
            </div>
          )}
        </Droppable>

      </DragDropContext>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatch,
  dispatchOnDragEnd: ({source, destination}) => (
    destination &&
    dispatch(moveListInBoard(source.index, destination.index))
  ),
  dispatchAddListToBoard: (listName) => dispatch(addListToBoard(listName))
});

export default connect(mapStateToProps, mapDispatchToProps)(DNDLists);