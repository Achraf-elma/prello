// Modules

import React from 'react';
import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootswatch/dist/lumen/bootstrap.min.css';
import '../../style/App.css';
import '../../style/list.css';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { moveCardInList, addCardToList} from '../../action/actionList';

import MyCard from '../MyCard/MyCard';
import CardCreator from '../Creator/CardCreator';

// Action builder
import { setListPosition, setListName } from '../../action/actionList';


// Components
// TODO: Import direct children components

const ListWIP = ({
  name,
  cards,
  //pos,
  dispatchOnDragEnd,
    dispatchAddCardToList,
  setListName, 
  setListPosition,
}) => (
// TODO: Create JSX DOM
  
      <Card className="list">
           <CardCreator addCard={(cardName) => dispatchAddCardToList(cardName)} />
           <CardHeader className="list-title">{name}</CardHeader>
        
        {cards.map((card, index) => ( 
                  <MyCard desc={card.name}></MyCard>
                ))}
            
    
        <CardText>
            <small className="text-muted"> > Add a new card</small>
          </CardText>
      </Card>

/** 
<Card className="list">
<CardCreator addCard={(cardName) => dispatchAddCardToList(cardName)} />
<CardHeader className="list-title">{name}</CardHeader>
<DragDropContext onDragEnd={( result ) => dispatchOnDragEnd( result )}>
<Droppable droppableId="droppable" direction="vertical">
{(provided, snapshot) => (
 <div
   ref={provided.innerRef}
   className={classNames("list-cards", { "card-dragging-over": snapshot.isDraggingOver })}
   {...provided.droppableProps}
 >
<CardBody>
{cards.map((card, index) => ( 
  <Draggable key={card.id} draggableId={card.id} index={index}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={classNames(
        "card-item",
        { "card-dragged": snapshot.isDragging }
      )}
    >
  <MyCard desc="card"></MyCard>
  </div>
     )}
   </Draggable>
) )} 
</CardBody>

</div>
)}
</Droppable>
</DragDropContext>


<CardText>
 <small className="text-muted"> > Add a new card</small>
</CardText>
</Card>

  
*/
);
 
const mapStateToProps = ( state, props ) => ({
  cards: state.lists,
   id : state.list.id,
  /*closed : state.list.closed,
  idBoard : state.list.idBoard,
  pos : state.list.pos,
  subscribed : state.list.subscribed */
    })

const mapDispatchToProps = ( dispatch, props ) => ({
    dispatch,
    dispatchOnDragEnd: ({source, destination}) => (
      destination &&
      dispatch(moveCardInList(source.index, destination.index))
    ),
    setListName: (name) => dispatch(setListName( props.id, name )),
    dispatchAddCardToList: (cardName) => dispatch(addCardToList(cardName))
});

//export default Board // TODO: Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(ListWIP); 