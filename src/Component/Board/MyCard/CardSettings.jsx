// Modules
import React from 'react';
import { connect } from 'react-redux';
import {
  ListGroupItem, ListGroup, Badge,
  Col, Row, Container,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Popover, PopoverHeader, PopoverBody
} from 'reactstrap';

// Components
import InputText from '../../Input/InputText';

import CommentCreator from '../CommentCreator';
import AddLabel from './AddLabel';
import AddMember from './AddMember';

// Actions
import { setCardName, setCardDesc, setCardDueDate, setCardClosed } from '../../../action/actionCard';
import { addLabelToCard } from '../../../action/actionLabel';
import { addCommentToCard } from '../../../action/actionComment';

// Style
import '../../../style/cardsettings.css';


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
      popoverOpen : [false, false, false]
    };
      this.delete = this.delete.bind(this);
      this.togglePopover = this.togglePopover.bind(this);
  }
 
  closeSettings = () => (this.props.history.goBack());

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
    this.props.history.goBack();
  }

  togglePopover(popoverNumber) {
     let currentState = this.state.popoverOpen[popoverNumber];
     let newState = [...this.state.popoverOpen];
    newState[popoverNumber] = !currentState;
    this.setState({
      popoverOpen: newState
    });
  }

  addingComment(event){
    this.props.dispatchAddCommentToCard(this.props.card.id,event);
  }

  render() {
    const {
      card,
      labels,
      comments,
      dispatchSetCardName,
      dispatchSetCardDueDate,
      dispatchSetCardDesc,
    } = this.props
    const closeBtn = <button className="close" onClick={this.closeSettings}>&times;</button>;

      return (
      <div>
       
        <Modal key={card.id} size="lg" isOpen={true} toggle={this.closeSettings} className={this.props.className}>
          <ModalHeader toggle={this.closeSettings} close={closeBtn}>
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
            <Col>
            <Row>
             <Col className="labelField" xs="6">Description {card.idBoard}:</Col>
             <Col   xs="auto">
               <InputText
                  className="editCardInput"
                  type="ari"
                    value={card.desc}
                    placeHolder="Description of your card"
                    resetable
                    toggle={true}
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
                    toggle={true}
                    onChange={(value) => dispatchSetCardDueDate(card.id,value)}
                  />
              </Col>
            </Row>
            <hr/>
            <Row>

              <Col className="labelField" xs="6">
              <span className="fa fa-plus-circle"> Label :</span> 
              </Col>
              {labels.map((label) => (
                 <Col >
                  
          <Badge  style={{color : '#fff', background : label.color }} pill>{label.name}</Badge>
       
                 </Col>
              ))}
            </Row>

            <Row>
              <Col className="labelField" xs="6">
      <div>
          
          
         
        </div>
        </Col>
            </Row>

             <hr/>
             <Row className="labelField" xs="6">Comments :</Row>  
             <Container className="comments" >
               
                <Row>
                <ListGroup className="listComment">
             {comments.map((comment) => (
               
            
                <ListGroupItem>
                  <span className="commentMember">> Achraf </span>
                  <span className="commentDate">({comment.date}) : </span>
                  <span className="commentText">{comment.text}</span>
                  </ListGroupItem>
              
              ))}
              </ListGroup>
                 </Row>
          </Container>
          <Row>
            <Col>
                <CommentCreator handleSubmit={this.addingComment.bind(this)} />
            </Col> 
          </Row>
          </Col>

          <Col className="buttonsSettingCard" xs="3">
            <h4>Add</h4><hr/>
            <button className="buttonCustom" id={"card-member"+card.id} onClick={() => this.togglePopover(1)}>Member</button> <br/>
            <button className="buttonCustom" id={"card-label"+card.id} onClick={() => this.togglePopover(0)}>Label</button> <br/>
            <button className="buttonCustom"> Checklist</button> <br/>


          <Popover placement="right" isOpen={this.state.popoverOpen[0]} target={"card-label"+card.id} toggle={() => this.togglePopover(0)}>
            <PopoverHeader>Labels</PopoverHeader>
            <PopoverBody>
              <AddLabel idCard={card.id} />
            </PopoverBody>
          </Popover>

            <Popover placement="right" isOpen={this.state.popoverOpen[1]} target={"card-member"+card.id} toggle={() => this.togglePopover(1)}>
            <PopoverHeader>Member</PopoverHeader>
            <PopoverBody>
              <addMember idBoard={card.idBoard} idCard={card.id} />
            </PopoverBody>
          </Popover>

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
  labels: state.labels.filter(label => label.idCard === props.match.params.idCard),
  card : state.cards.find(card => card.id === props.match.params.idCard),
  comments: state.comments.filter(comment => comment.idCard === props.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardName: (id,name) => dispatch(setCardName(id, name)),
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc)),
  dispatchSetCardDueDate: (id,date) => dispatch(setCardDueDate(id, date)),
  dispatchSetCardClosed: (id) => dispatch(setCardClosed(id, true)),


  dispatchAddCommentToCard: (id, event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch(addCommentToCard( id,  null, data.get('text'))) 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 