// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, Badge, Progress,Container, Card, CardHeader, CardBody} from 'reactstrap';
import InputText from '../../../Input/InputText'
// Actions
import { setCardDesc } from '../../../../action/actionCard';
import CheckList from '../../CheckList/Checklist';

const CardCheckList = ({checkLists}) => (
  <Container>
     
     <Row className="labelField" xs="6"> 
     <i className="fa fa-list-ol" aria-hidden="true"></i>&nbsp; To do list : </Row>
    
    
    {checkLists.map((checkList) => (
      <Row  key={checkList.id}>
     <Card  style={{width : '100%'}}>
         <CardHeader> <div className="text-center">{checkList.name}</div>
        
         </CardHeader>
         <CardBody>
              <CheckList idCheckList={checkList.id}/>
         </CardBody>
    </Card>
    </Row>
    ))}

 </Container>
);

const mapStateToProps = (state, props) => ({
  checkLists: state.checkLists.filter(checkList => checkList.idCard === props.idCard),
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardDesc: (id,desc) => dispatch(setCardDesc(id, desc))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardCheckList); 