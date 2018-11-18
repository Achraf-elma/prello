// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { addListToBoard } from '../../action/actionBoard';
import { setLists } from '../../action/actionLists';
import { setListPosition } from '../../action/actionList';
// Components
import List from './List/List';
import ListCreator from './ListCreator';
import CardSettings from './MyCard/CardSettings';
import CardCreator from './List/CardCreator';

// Styles
import '../../style/board.css';

import { fetchBoardLists } from '../../request/board';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  addList(listName) {
    this.props.dispatchAddListToBoard(listName, this.props.lists);
  }
  render() {
    const {
      lists, dispatchOnDragEnd, match
    } = this.props;
    if(!lists){
      return (
        "loading"
      )
    }
    console.log(lists)
    return (
      <div>

        <ListCreator addList={(listName) => this.addList(listName)} />
        <DragDropContext onDragEnd={(result) => dispatchOnDragEnd(result, lists)}>
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
                        className={classNames("list-item", { "list-dragged": snapshot.isDragging })}
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

const mapStateToProps = (state, props) => ({
  lists: state.lists
    .filter(list => list.idBoard === props.match.params.idBoard && list.isClosed !== true)
    .sort((list1, list2) => list1.position - list2.position),
});

const calculNewPosition = (indexBefore, indexAfter, items) => {
  let filteredIitems = items.filter((item, index) => index !== indexBefore);
  let littlerList = filteredIitems[indexAfter - 1];
  let biggerList = filteredIitems[indexAfter];
  let littlerPos = (littlerList && littlerList.position) * 1 || 0;
  let biggerPos = (biggerList && biggerList.position) * 1 || Number.MAX_SAFE_INTEGER;
  console.log(littlerPos, biggerPos);
  return (littlerPos + biggerPos) / 2;
}

const mapDispatchToProps = (dispatch, props) => ({
  dispatchOnDragEnd: ({ source, destination }, lists) => (
    destination &&
    dispatch(setListPosition(
      lists[source.index].idList,
      calculNewPosition(source.index, destination.index, lists)
    ))
  ),
  dispatchAddListToBoard: (listName, lists) => dispatch(addListToBoard(props.match.params.idBoard, listName, calculNewPosition(lists.length, lists.length, lists))),
  dispatchSetLists: (lists) => dispatch(setLists(lists)),
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 