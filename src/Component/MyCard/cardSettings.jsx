/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { setCardName, setCardDesc, setCardDueDate } from '../../action/actionCard';
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

  render() {
    const {
      modal,
      card,
      dispatchSetCardName,
      dispatchSetCardDueDate,
      dispatchSetCardDesc,
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
                onChange={(value) => dispatchSetCardName(card.id,value)}
              />
            </span>
          </ModalHeader>
          <ModalBody>
          <span className="ListCreator">
              Description
              <InputText
              className="addNewList"
               type="text"
                value={card.desc}
                placeHolder="Desc Name"
                resetable
                toggle={this.props.modal}
                onChange={(value) => dispatchSetCardDesc(card.id,value)}
              />
            </span>

           <span className="ListCreator">
              Due date
              <InputText
              className="addNewList"
                type="dateTime"
                value={new Date(card.dueDate)}
                placeHolder={new Date()}
                resetable
                toggle={this.props.modal}
                onChange={(value) => dispatchSetCardDueDate(card.id,value)}
              />

         
            </span>



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
  dispatchSetCardName: (id,name) => dispatch(setCardName(id, name)),
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc)),
  dispatchSetCardDueDate: (id,date) => dispatch(setCardDueDate(id, date))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 