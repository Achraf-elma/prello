// Modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import io from 'socket.io-client';

// Styling

// Action builder
import { moveListInBoard, addListToBoard} from '../action/actionBoard';

// Components
import ListCreator from './ListCreator';

class WIP extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    let socket = io.connect({ host: "127.0.0.1", port: "3000" });
    socket.on("dispatch",(action) => console.log("coucou") ||
     this.props.dispatch(action))
    this.setState({ socket });
  }

  componentWillUnmount(){
    this.state.socket.disconnect();
  }

  socketDispatch = (action) => this.state.socket.emit('dispatch', action);

  render(){
    const {
      lists,
        dispatchOnDragEnd,
        dispatchAddListToBoard
    } = this.props;
    return (
      <DragDropContext onDragEnd={( result ) => this.socketDispatch(dispatchOnDragEnd( result ))}>
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
                    <span
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={classNames(
                        "list-item",
                        { "list-dragged": snapshot.isDragging }
                      )}
                    >
                      {list.name}
                    </span>
                  )}
                </Draggable>
              ))}
              <ListCreator addList={(listName) => this.socketDispatch(dispatchAddListToBoard(listName))} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

export default connect(mapStateToProps, mapDispatchToProps)(WIP);