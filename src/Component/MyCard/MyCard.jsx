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
import CardSettings from './cardSettings';

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
  id,
  idList,
  card,
  toggle } = this.props ;
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
  return (
   <Card onClick={this.toggle} className="mycard" >
     <CardHeader className="mycard-header">
       
     </CardHeader>
     <CardBody> {card.name}  <br/> {card.dueDate ?  "Due date : "  + formattedDate(card.dueDate) : ""}  </CardBody>
     <CardSettings id={card.id} modal={true}/>
    </Card>

    
    );
  }
}
const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.id == props.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  setCardName: (name) => dispatch(setCardName( props.id, name ))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 