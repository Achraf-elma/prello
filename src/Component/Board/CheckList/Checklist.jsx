// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Col, Row} from 'reactstrap';
// Action builder
import { addNewChecklistItem, deleteChecklistItem } from '../../../action/actionChecklist';
import {  setCheckItemCompleted} from '../../../action/actionCheckItem';
import InputText from '../../Input/InputText'


// Components
//import CheckItem from './CheckItem'

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

  }

  render() {
    const {
      checkList,
      dispatchAddNewChecklistItem,
      dispatchSetCheckItemCompleted,
      dispatchDeleteChecklistItem,
      checklistItems
    } = this.props
  return (
  <div className="CheckList">
    <h1 style={{ textAlign : 'center'}}>
     
    </h1>

       <Row>

           
            <Col> <InputText placeHolder="Add a new task" onChange={(value) =>  dispatchAddNewChecklistItem( value)}/>  </Col>
            <hr/>
          </Row>
   
    {checklistItems.map((item, index) => (
        <Row key={item.id}>
            <Col> <input type="checkbox" checked={item.completed} onChange={() => dispatchSetCheckItemCompleted(item.id,  !(item.completed), item.name)}/> </Col>
            <Col> {item.name}  </Col>
            <Col onClick={ () => dispatchDeleteChecklistItem(item.id)}className="buttonX"> X </Col>
            <hr/>
          </Row>
          
    ))
  }

  </div>
)
}


}

const mapStateToProps = (state, props) => console.log("STATE" ,state.checkLists) || ({
  //name: state.checkList.name,
   checkList: state.checkLists.find(checkList => checkList.id === props.idCheckList),
   checklistItems: state.checkLists.find(checkList => checkList.id === props.idCheckList).checklistItems


})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddNewChecklistItem: (item) => dispatch(addNewChecklistItem(props.idCheckList, item)),

  dispatchDeleteChecklistItem: (item) => dispatch(deleteChecklistItem(props.idCheckList, item)),
    dispatchSetCheckItemCompleted: (id,completed, name) => {
      console.log("SET COMPLETED TO ", id, props.idCheckList, completed)
      dispatch(setCheckItemCompleted(id,props.idCheckList, completed, name))
}
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckList); 