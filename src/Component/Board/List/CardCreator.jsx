// Modules
import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import InputMoment from 'input-moment';
import { connect } from 'react-redux';
import {fetchBoardCards} from '../../../request/board'

// Components
import { Modal,ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Collapse, CardHeader, Col, Row ,CardColumns, Card, CardGroup,CardBody, Container} from 'reactstrap';
import { addCardToList} from '../../../action/actionList';

// Styles 
import '../../../style/list.css';
import { setCards } from '../../../action/actionCards';
require('input-moment/dist/input-moment.css');

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment(),
      isCollapse : false,
      dueDateOK : false
    };
  }

  handleCollapse = () => {
    this.setState({ isCollapse : !this.state.isCollapse });
  };
  handleChange = m => {
    this.setState({ m : m, dueDateOK : true});
  };
  handleUndo = () => {
    this.setState({  isCollapse : false, dueDateOK : false });
  }

  handleSave = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    var cardName = data.get('cardName');
    var dueDate = this.state.dueDateOK === true ?  this.state.m :  null;
    this.props.dispatchAddCardToList(
      this.props.idList,
      this.props.idBoard,
      cardName,
      dueDate
    );

    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({ 
      isCollapse : false,
      dueDateOK : false 
    });
    this.props.toggle();
  }
  render() {
    const {
      handleSubmit,
      isOpen,
      toggle,
       dispatchAddCardToList
    } = this.props;
    const closeBtn = <button className="close" onClick={this.togglePopover}>&times;</button>;
    const undoDate = <button type="button"  className="close" onClick={this.handleUndo}>&times;</button>;
    const submitBtn = <div> 
                        <button form="card-creator" className="buttonCustom"  htmlFor="card-creator" type="submit">Done</button> 
                        <button type="button" className="close" onClick={this.toggleModal}>&times;</button>
                      </div>;

  return (
    <Modal isOpen={isOpen} toggle={this.toggleModal}>
      <form id="card-creator" onSubmit = {this.handleSave}>

    <ModalHeader toggle={this.toggleModal} close={submitBtn}>Add card</ModalHeader>
    <ModalBody>
    <Container className="ListCreator">
    <Container>
    <FormGroup>
        <Row>
          <Col  xs="6"> <Label className="labelField" for="cardName">Card Name</Label> </Col>
          <Col  xs="6"> <Input autoFocus type="text" name="cardName" placeholder="deliver logo" /> </Col>
        </Row>
        </FormGroup>
        <FormGroup>
        <Row>
       
            <Col> <Label className="labelField" for="dueDate">
            <i className="fa fa-calendar-times-o" aria-hidden="true">
            </i>&nbsp;Due date</Label> </Col>
            <Col> <input className="dueDateOutput" onClick={this.handleCollapse} type="text" name="dueDate"  placeholder={ this.state.dueDateOK ?  this.state.m.format('llll') : "No due date"} readOnly /> </Col>
             {undoDate}
        </Row>
        </FormGroup>
     </Container>
   <Container>
      <Collapse isOpen={this.state.isCollapse}>
          <Card>
                <InputMoment
                
                moment={this.state.m}
                onChange={this.handleChange}
                minStep={5}
                onSave={this.handleCollapse} />
          </Card>
      </Collapse>
    </Container>
 
     
 
  </Container>

   </ModalBody>
   </form>
        </Modal>
       
 
);
  }
  }

  const mapStateToProps = ( state, props ) => ({
   
  });
  
  const mapDispatchToProps = ( dispatch, props ) => ({
  
      dispatchAddCardToList: (idlist, idboard, name, duedate) => dispatch(addCardToList(idlist, idboard, name, duedate)),
      dispatchSetCards : (cards) => dispatch(setCards(cards))

  });
  

export default connect(mapStateToProps, mapDispatchToProps)(CardCreator); 