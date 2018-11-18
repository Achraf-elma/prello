// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, Badge, Progress} from 'reactstrap';

// Actions
import { setCardDesc } from '../../../../action/actionCard';

const CardCheckList = ({checkLists}) => (
  <Row>
     
     <Col className="labelField" xs="6"> 
     <i className="fa fa-tags" aria-hidden="true"></i>&nbsp; To do list : </Col>
    
    <Col>
    
    {checkLists.map((checkList) => (
    <Col key={checkList.id}>
        {checkList.name}
        <div className="text-center">50%</div>
        <Progress value={50} />
    </Col>
    ))}
    </Col>
  </Row>
);

const mapStateToProps = (state, props) => ({
  checkLists: state.checkLists.filter(checkList => checkList.idCard === props.idCard),
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardCheckList); 