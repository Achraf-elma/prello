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
  idList,
  name,
  cards,
  //pos,
  dispatchOnDragEnd,
  setListName, 
  setListPosition,
}) => (

        <Card className="list">
        <CardHeader><span className="list-title">{name}</span></CardHeader>
        <CardHeader className="list-title">{name}</CardHeader>

       
              <MyCard desc="doing"></MyCard>
              <MyCard desc="Front"></MyCard>
              <MyCard desc="back"></MyCard>
          

         {cards.map((card, index) => (
           <MyCard idList={card.idList} id={card.id}></MyCard>
           ))}
              
        <CardText>
        <AddCard idList={idList}/>
        </CardText>
        </Card>
);
 
const mapStateToProps = ( state, props ) => ({
 // idlist: state.list.idlist,
  cards: state.cards.filter(card => card.idList == props.idList)
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
    setListName: (name) => dispatch(setListName( name )),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 