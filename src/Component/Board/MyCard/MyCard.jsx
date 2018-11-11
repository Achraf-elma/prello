// Modules
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import{Card , CardHeader, CardBody, Badge} from 'reactstrap';

// Actions 
import {  setCardName } from './../../../action/actionCard';

// Style
import '../../../style/card.css';

function formattedDate(dt) {
  let d = new Date(dt);
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return `${day}/${month}/${year}`;
}

const MyCard = ({ card, labels, history, match }) => (
  <Card onClick={() => history.push(`${match.url}/card/${card.id}`)} className="mycard" >
    <CardHeader className="mycard-header">
    {labels.map((label) => (
      <Badge  style={{color : '#fff', background : label.color }} pill>{label.name}</Badge>
    ))}
    </CardHeader>
    <CardBody> {card.name}  <br/> {card.dueDate ?  "Due date : "  + formattedDate(card.dueDate) : ""}  </CardBody>
  </Card>
);

const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.id === props.id),
  labels: state.labels.filter(label => label.idCard === props.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    setName: (id,name) => dispatch(setCardName(id, name )),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCard)); 