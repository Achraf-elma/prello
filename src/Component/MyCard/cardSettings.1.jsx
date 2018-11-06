/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { setCardPosition, setCardName } from '../../action/actionCard';
import InputText from '../Input/InputText';

function formattedDateMDY(dt) {
  let d = new Date(dt);
 let month = String(d.getMonth() + 1);
 let day = String(d.getDate());
 const year = String(d.getFullYear());

 if (month.length < 2) month = '0' + month;
 if (day.length < 2) day = '0' + day;

 return `${year}-${month}-${day}`;
}
class CardSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };

  }
 
  render() {
    const {
      modal,
      card,
      setCardName,
      toggleModal
    } = this.props
    const closeBtn = <button className="close" onClick={toggleModal}>&times;</button>;

      return (
      <div>
  
        <Modal key={card.id} isOpen={this.props.modal} toggle={toggleModal} className={this.props.className}>
          <ModalHeader toggle={toggleModal} close={closeBtn}>
           <span className="ListCreator">
              <InputText
              className="changeName"
                value={card.name}
                placeHolder="Card Name"
                resetable
                onChange={(value) => setCardName(card.id,value)}
              />
            </span>
          </ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            stuff
          </ModalFooter>
        </Modal>
     
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  
  card : state.cards.find(card => card.id == props.id)
 

})

const mapDispatchToProps = (dispatch, props) => ({
  setCardName: (id,name) => {
   console.log("name" + name ) 
   dispatch(setCardName(id, name))
  }
  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 