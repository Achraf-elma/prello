// Modules
import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import InputMoment from 'input-moment';
// Components
import { Button, Form, FormGroup, Label, Input, Col, Row ,CardColumns, Card, CardGroup,CardBody, Container} from 'reactstrap';

// Styles 
import '../../../style/list.css';
require('input-moment/dist/input-moment.css');

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment()
    };
   
  }

  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };

  render() {
    const {
      handleSubmit,
    } = this.props;
  return (
 <Container className="ListCreator">
  <Form  onSubmit = {handleSubmit}>

   <Row>
        <Col>
          <FormGroup>
            <Label for="cardName">Card Name</Label>
            <Input autoFocus type="text" name="cardName" placeholder="deliver logo" />
          </FormGroup>
    
          <FormGroup>
            <Label for="dueDate">Due date</Label>
              <input type="text" name="dueDate" value={this.state.m.format('llll')} readOnly />
          </FormGroup>
       </Col>
   <Col>
      <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
    </Col>
    </Row>
     
    <Button className="submit" type="submit" >Submit</Button>
  </Form>
  </Container>
 
);
  }
  }

export default CardCreator; 