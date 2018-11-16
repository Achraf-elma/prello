// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col} from 'reactstrap';
import moment from 'moment';
// Components
import InputText from '../../../Input/InputText';

// Actions
import { setCardDueDate } from '../../../../action/actionCard';

import DatetimePicker from '../../List/DatetimePicker';


const CardDuedate = ({card, dispatchSetCardDueDate}) => (
  <Row>
    <Col className="labelField" xs="6"> <i class="fa fa-calendar-times-o" aria-hidden="true"></i>&nbsp;Due Date :</Col>
    <Col  xs="6">
     <input type="text" value={moment(card.dueDate).format('llll')} readOnly />
      <DatetimePicker
          handleSave={(value) => dispatchSetCardDueDate(card.id,value)}
        />
    </Col>
  </Row>
);

const mapStateToProps = (state, props) => ({
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardDueDate: (id,duedate) => dispatch(setCardDueDate(id, duedate))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDuedate); 