// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, Badge} from 'reactstrap';

// Actions
import { setCardDesc } from '../../../../action/actionCard';

import ShowMemberCard from './showMemberCard';
const CardMember = ({idMembers}) => (
  <Row>
     
     <Col className="labelField" xs="6"> 
     <i className="fa fa-tags" aria-hidden="true"></i>&nbsp; Member : </Col>
    
    <Col>
    
   


    </Col>
  </Row>
);

const mapStateToProps = (state, props) => console.log(state) || ({
  idMembers :  Object.keys( state.cards.find(card => card.id === props.idCard).idMembers).map( key => ({ index: key, id: state.cards.find(card => card.id === props.idCard).idMembers[key] })) || [],
  card :  state.cards.find(card => card.id === props.idCard)

})

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CardMember);