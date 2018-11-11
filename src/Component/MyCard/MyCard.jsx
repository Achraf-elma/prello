// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, Badge} from 'reactstrap';

// Components
import CardSettings from './cardSettings';

// Actions 
import {  setCardName } from '../../action/actionCard';

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

class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const{
      idBoard,
      card, 
      labels
    } = this.props ;
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
  return (
   <Card onClick={this.toggle.bind(this)} className="mycard" >
     <CardHeader className="mycard-header">
     {idBoard}
     {card.idBoard}
     {this.props.labels.map((label) => (
          <Badge  style={{color : '#fff', background : label.color }} pill>{label.name}</Badge>
        ))}
     </CardHeader>
     <CardBody> {card.name}  <br/> {card.dueDate ?  "Due date : "  + formattedDate(card.dueDate) : ""}  </CardBody>
     <CardSettings id={card.id} toggleModal={this.toggle.bind(this)} modal={this.state.modal}/>
   </Card>
    );
  }
}
const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.id == props.id),
  labels: state.labels.filter(label => label.idCard == props.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  setName: (id,name) => {
   dispatch(setCardName(id, name ));
  }
 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 