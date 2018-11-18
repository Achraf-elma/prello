// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col} from 'reactstrap';
// Components
import InputText from '../../../Input/InputText';

// Actions
import { setCardDesc } from '../../../../action/actionCard';

const CardDescription = ({card, dispatchSetCardDesc}) => (
  <Row>
   <Col className="labelField" xs="6"> <i className="fa fa-address-card" aria-hidden="true"></i> 	&nbsp;Description :</Col>
   <Col xs="auto">
    <InputText
        className="editCardInput"
        type="text"
        value={card.desc}
        placeHolder="Description of your card"
        resetable
        toggle={true}
        onChange={(value) => dispatchSetCardDesc(card.id,value)}
    />
  </Col>
  </Row>
);

const mapStateToProps = (state, props) => ({
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDescription); 