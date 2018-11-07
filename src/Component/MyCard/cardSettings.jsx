/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';

import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import { setCardName, setCardDesc, setCardDueDate, setCardClosed } from '../../action/actionCard';
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

function formattedTime(dt) {
  let d = new Date(dt);
 const time = String(d.getTime());
 return time;
}

class CardSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
      this.delete = this.delete.bind(this);
  }
 
  setCardDueTime(id,value){
    let date = this.props.card.dueDate;
    let time = new Date(value);
    let timeString = time.getHours() + ':' + time.getMinutes() + ':00';
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Jan is 0, dec is 11
    var day = date.getDate();
    var dateString = '' + year + '-' + month + '-' + day;
    var combined = new Date(dateString + ' ' + timeString);
    this.props.dispatchSetCardDueDate(id, combined); 
  }
  
  delete(){
    this.props.dispatchSetCardClosed(this.props.card.id);
    this.props.toggleModal();
  }
  render() {
    const {
      modal,
      card,
      dispatchSetCardName,
      dispatchSetCardDueDate,
      dispatchSetCardDesc,
      dispatchSetCardClosed,
      toggleModal
    } = this.props
    const closeBtn = <button className="close" onClick={toggleModal}>&times;</button>;

      return (
      <div>
       
        <Modal key={card.id} isOpen={this.props.modal} toggle={toggleModal} className={this.props.className}>
          <ModalHeader toggle={toggleModal} close={closeBtn}>
           <span className="ListCreator">
              <InputText
              className="changeNameInput"
                value={card.name}
                placeHolder="Card Name"
                resetable
                onChange={(value) => dispatchSetCardName(card.id,value)}
              />
            </span>
          </ModalHeader>
          <ModalBody>

          <Container>

             <Row>
             <Col className="labelField" xs="6">Description :</Col>
             <Col  xs="6">
               <InputText
                  className="editCardInput"
                  type="ari"
                    value={card.desc}
                    placeHolder="Description of your card"
                    resetable
                    toggle={this.props.modal}
                    onChange={(value) => dispatchSetCardDesc(card.id,value)}
                  />
                </Col>
             </Row>
              <hr/>
             <Row>
              <Col className="labelField" xs="6">Due Date :</Col>
              <Col  xs="6">
                <InputText
                  className="editCardInput"
                    type="date"
                    value={formattedDateMDY(card.dueDate)}
                    resetable
                    toggle={this.props.modal}
                    onChange={(value) => dispatchSetCardDueDate(card.id,value)}
                  />
              </Col>
            </Row>
          </Container>
          </ModalBody>
          <ModalFooter>
            <button className="deleteCard" onClick={this.delete}>Delete</button>
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
  dispatchSetCardName: (id,name) => dispatch(setCardName(id, name)),
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc)),
  dispatchSetCardDueDate: (id,date) => dispatch(setCardDueDate(id, date)),
  dispatchSetCardClosed: (id) => dispatch(setCardClosed(id, true))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 