// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

// Action builder
import { setListPosition, setListName } from '../../action/actionList';
import { moveCardInList, addCardToList} from '../../action/actionList';


// Components
import MyCard from '../MyCard/MyCard';
import CardCreator from './../../Component/Creator/CardCreator';

// Style 
import '../../style/App.css';
import '../../style/list.css';

const List = ({
  name,
  cards,
  //pos,
  dispatchOnDragEnd,
    dispatchAddCardToList,
  setListName, 
  setListPosition,
}) => (

        <Card className="list">
      
        <CardHeader className="list-title">{name}</CardHeader>

       
              <MyCard desc="doing"></MyCard>
              <MyCard desc="Front"></MyCard>
               <MyCard desc="back"></MyCard>
          
        

        <CardText>
        <small className="text-muted"> > Add a new card</small>
        </CardText>
        </Card>
);
 
const mapStateToProps = ( state, props ) => ({
  cards: state.lists,
  //id : state.list.id,
  /*closed : state.list.closed,
  idBoard : state.list.idBoard,
  pos : state.list.pos,
  subscribed : state.list.subscribed */
    })

const mapDispatchToProps = ( dispatch, props ) => {
  return {
    dispatch,
    dispatchOnDragEnd: ({source, destination}) => (
      destination &&
      dispatch(moveCardInList(source.index, destination.index))
    ),
    setListName: (name) => dispatch(setListName( props.id, name )),
    dispatchAddCardToList: (cardName) => dispatch(addCardToList(cardName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 