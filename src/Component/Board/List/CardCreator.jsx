// Modules
import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import InputMoment from 'input-moment';
// Components
import { Modal,ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Collapse, CardHeader, Col, Row ,CardColumns, Card, CardGroup,CardBody, Container} from 'reactstrap';

// Styles 
import '../../../style/list.css';
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
    this.setState({ dueDateOK : false });
  }
  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };
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
      toggle
    } = this.props;
    const closeBtn = <button className="close" onClick={this.togglePopover}>&times;</button>;
    const undoDate = <button type="button"  className="close" onClick={this.handleUndo}>&times;</button>;
    const submitBtn = <div> 
                        <button form="card-creator" className="buttonCustom"  for="card-creator" type="submit">Done</button> 
                        <button type="button" className="close" onClick={this.toggleModal}>&times;</button>
                      </div>;

  return (
    <Modal isOpen={isOpen} toggle={this.toggleModal}>
      <form id="card-creator" onSubmit = {handleSubmit}>

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
            <Col> <input className="dueDateOutput" onClick={this.handleCollapse} type="text" name="dueDate" value={ this.state.dueDateOK ?  this.state.m.format('llll') : "No due date"} readOnly /> </Col>
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

export default CardCreator; 