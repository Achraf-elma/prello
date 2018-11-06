/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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

    this.toggle = this.toggle.bind(this);
  }
 
  toggle() {
    console.log('oui');
    console.log(this.state.modal);
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {card} = this.props
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
    <Form >
        {this.props.modal ? "oui" : "Non"}
        {this.state.modal ? "OUI": "NON"}
        <Modal key={card.id} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{card.name}</ModalHeader>
          <ModalBody>
             <span className="ListCreator">
         <FormGroup>
          <Label for="cardName">Card Name</Label>
          <Input type="text" name="cardName" defaultValue={card.name} placeholder="deliver logo"/>
          </FormGroup>
          <FormGroup>
          <Label for="dueDate">Due date</Label>
          <Input type="date" name="dueDate" defaultValue={formattedDateMDY(card.dueDate)} placeholder="2018-01-01" />
          </FormGroup>
                </span>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
card : state.cards.find(card => card.id == props.id)

  //desc: state.card.desc,
  //state: state.card.state
  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  
  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 