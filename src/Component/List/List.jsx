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
import AddCard from './addcard';
import CardCreator from './../../Component/Creator/CardCreator';

// Style 
import '../../style/App.css';
import '../../style/list.css';

const List = ({
  name,
  cards,
  //pos,
  dispatchOnDragEnd,
  setListName, 
  setListPosition,
}) => (

        <Card className="list">
      
        <CardHeader><span className="list-title">{name}</span></CardHeader>

         {cards.map((card, index) => (
           <MyCard name={card.name}></MyCard>
           ))};
              
        <CardText>
        <AddCard/>
        </CardText>
        </Card>
);
 
const mapStateToProps = ( state, props ) => ({
  cards: state.cards,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 