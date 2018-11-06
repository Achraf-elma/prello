// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import InputText from '../Input/InputText';


// Components
import CheckItem from '../CheckList/CheckItem';
import Label from './Label';
import { setCardPosition, setCardName } from '../../action/actionCard';
import CardSettings from './cardSettings'
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
  id,
  idList,
  card, 
  setName
   } = this.props ;
   const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
  return (
   <Card onClick={this.toggle.bind(this)} className="mycard" >
     <CardHeader className="mycard-header">
       
     </CardHeader>
     <CardBody> {card.name}  <br/> {card.dueDate ?  "Due date : "  + formattedDate(card.dueDate) : ""}  </CardBody>
     <CardSettings id={card.id} toggleModal={this.toggle.bind(this)} modal={this.state.modal}/>
   </Card>
    
/** 
      <Modal key={card.id} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>          
      <ModalHeader toggle={this.toggle} close={closeBtn}>
           <span className="ListCreator">
              <InputText
              className="changeName"
                value={card.name}
                placeHolder="Card Name"
                resetable
                onChange={(value) => setName(card.id,value)}
              />
            </span>
          </ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            stuff
          </ModalFooter>
      </Modal>
      **/


    
    );
  }
}
const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.id == props.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  setName: (id,name) => {
   console.log("hey!" + name); 
   dispatch(setCardName(id, name ));
  }
 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 