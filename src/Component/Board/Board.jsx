// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { moveListInBoard, addListToBoard} from '../../action/actionBoard';
import { setLists } from '../../action/actionLists';
// Components
import List from './List/List';
import ListCreator from './ListCreator';
import CardSettings from './MyCard/CardSettings';
import CardCreator from './List/CardCreator';

// Styles
import '../../style/board.css';

import {  fetchBoardLists } from '../../request/board';


class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  addList(listName){
    this.props.dispatchAddListToBoard(listName) 
    fetchBoardLists(this.props.match.params.idBoard )
      .then(lists=> this.props.dispatchSetLists(lists),)
      .catch(err => console.error(err));
  }
  render(){
    const {
      lists, dispatchOnDragEnd, match 
    } = this.props;
    return (
      <div>
      
      <ListCreator addList={(listName) =>  this.addList(listName)} />
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
            className={classNames( "list-item", { "list-dragged": snapshot.isDragging })}
            >
            <List
              idList={list.idList}
              />  
            </span>
            )}
            </Draggable>
            ))}
            </span>
            )}
            </Droppable>
            </DragDropContext>
            <Route path={`${match.path}/list/:idList/addCard`} component={CardCreator} />
            <Route path={`${match.path}/card/:idCard`} component={CardSettings} />
            </div>
            )
            
          }
          
        }
        
        const mapStateToProps = ( state, props ) => console.log(props.match) || ({
          lists: state.lists.filter( list => list.idBoard === props.match.params.idBoard ),
        })
        
        const mapDispatchToProps = (dispatch, props) => ({
          dispatch,
          dispatchOnDragEnd: ({source, destination}) => (
            destination &&
            dispatch(moveListInBoard(source.index, destination.index))
            ),
            dispatchAddListToBoard: (listName) => dispatch(addListToBoard(props.match.params.idBoard, listName)),
            dispatchSetLists : (lists) => dispatch(setLists(lists)),

          });
          
          // Export connected Components
          export default connect(mapStateToProps, mapDispatchToProps)(Board); 