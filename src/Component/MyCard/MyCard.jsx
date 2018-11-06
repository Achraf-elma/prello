// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';



// Components
import CheckItem from '../CheckList/CheckItem';
import Label from './Label';
import { setCardPosition, setCardName } from '../../action/actionCard';

// Style
import '../../style/card.css';

function formattedDate(dt) {
   let d = new Date(dt);
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
}

const MyCard = ({
  id,
  idlist,
  card
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
   <Card className="mycard" >
     <CardHeader className="mycard-header">
    
     </CardHeader>
     <CardBody> {card.name}  <br/> {card.dueDate ?  "Due date : "  + formattedDate(card.dueDate) : ""}  </CardBody>
    </Card>
  );

const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.id == props.id)

  //desc: state.card.desc,
  //state: state.card.state
  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  setCardName: (name) => dispatch(setCardName( props.id, name )),

  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 