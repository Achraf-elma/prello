// Modules
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import InputMoment from 'input-moment';


// Components
import { Button, Form, FormGroup, Label, Collapse, Input, Col, Row ,CardColumns, Card, CardGroup,CardBody, Container} from 'reactstrap';

// Styles 
import { setCardDueDate } from '../../../../action/actionCard';
require('input-moment/dist/input-moment.css');

class CardDuedate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment(),
      isCollapse : false
    }
   
  }

  handleChange = m => {
    this.setState({ m : m });
  };

  handleCollapse = () => {
    this.setState({ isCollapse : !this.state.isCollapse });
  };


  render() {
    const {
      handleSave,
      card, 
      dispatchSetCardDueDate
    } = this.props;
  return (
    <Row>
    <Col className="labelField" xs="6"> <i class="fa fa-calendar-times-o" aria-hidden="true"></i>&nbsp;Due Date :</Col>
    <Col  xs="6">
     <input onClick={this.handleCollapse} type="text" value={moment(card.dueDate).format('llll')} readOnly />

   
      <Collapse isOpen={this.state.isCollapse}>
          <Card>
           <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={(value) => dispatchSetCardDueDate(card.id,value)}
          />
            </Card>
      </Collapse>
    
 
      
    </Col>
  </Row>
);
  }
  }

  const mapStateToProps = (state, props) => ({
    card : state.cards.find(card => card.id === props.idCard),
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    dispatchSetCardDueDate: (id,duedate) => dispatch(setCardDueDate(id, duedate))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardDuedate); 
