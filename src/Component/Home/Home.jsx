// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder



// Components
import BoardList from '../BoardList/BoardList';
//import TeamList from './../../Component/TeamList';
//import BoardForm from './../../Component/BoardForm';
//import TeamForm from './../../Component/TeamForm';

// Styles
import '../../style/home.css';

class Home extends React.Component{

  constructor(props) {
    super(props);
  }

    render() { 
        const {
            boards, 
            removeBoardFromBoards,
            updateBoard,
            addBoardToBoards
        }
         = this.props;

        return (
            <div>
            <div className="boards">
                <Button className="create"> Create a Board</Button>
                <BoardList boardListName="Recently Opened">
                </BoardList>
                <BoardList boardListName="All boards">
                </BoardList>
                
            </div>
                <div className="teams">
                holé
                </div>
                <Button> Create a Team</Button>
            </div>
            
        );
    }
}

// Export connected Components
/*const mapStateToProps = ( state, props ) => ({
    boards: state.boards
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    dispatch,
    dispatchOnDragEnd: ({source, destination}) => (
      destination &&
      dispatch(moveListInBoard(source.index, destination.index))
    ),
    dispatchAddListToBoard: (listName) => dispatch(addListToBoard(listName))
  });
  const mapDispatchToProps = (dispatch, props) => ({
    setCheckItemState: (complete) => dispatch(setCheckItemState( props.id, complete ))
  });
  // Export connected Components
  export default connect(mapStateToProps, mapDispatchToProps)(Home); */
  export default (Home);