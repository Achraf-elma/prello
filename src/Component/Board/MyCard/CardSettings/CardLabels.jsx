// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, Badge} from 'reactstrap';

// Actions
import { setCardDesc } from '../../../../action/actionCard';

const CardLabels = ({labels}) => (
  <Row>
     
     <Col className="labelField" xs="6"> 
     <i className="fa fa-tags" aria-hidden="true"></i>&nbsp; Label : </Col>
    
    <Col>
    
    {labels.map((label) => (
    <Col>
        <Badge key={label.id} style={{color : '#fff', background : label.color, width: '100%', minHeight: '20px'}} pill>{label.name}</Badge>
    </Col>
    ))}
    </Col>
  </Row>
);

const mapStateToProps = (state, props) => ({
  labels: state.labels.filter(label => label.idCard === props.idCard),
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CardLabels); 