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

class DatetimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment()
    };
   
  }

  handleChange = m => {
    this.setState({ m });
  };



  render() {
    const {
      handleSave,
    } = this.props;
  return (
           <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={handleSave(this.state.m.format('llll'))}
          />
);
  }
  }

export default DatetimePicker; 