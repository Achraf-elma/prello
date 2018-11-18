/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Card, Collapse, CardBody, CardHeader, Container, Row, Col , ListGroupItem, ListGroup, Badge} from 'reactstrap';

// Component
import CheckListCreator from '../CheckListCreator';

// Actions
import { addLabelToCard, setLabels } from '../../../action/actionLabel';
import {  addCheckListToBoard, setCheckLists } from '../../../action/actionChecklist';
import { fetchBoardLabels } from '../../../request/board';
import { assignChecklistToCard } from '../../../action/actionCard';

class AddCheckList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      popoverOpen: false
    };
    this.togglePopover = this.togglePopover.bind(this);
    this.addingCheckList = this.addingCheckList.bind(this);
  }
  addingCheckList(event){
    event.preventDefault();
    const data = new FormData(event.target);
        console.log(data.get('checkListName'));
    this.props.dispatchAddCheckListToBoard( this.props.idBoard, data.get('checkListName')); 

   // this.props.dispatchAddLabelToBoard(  data.get('labelName'), data.get('color'));  
   // fetchBoardLabels(this.props.idBoard)
     // .then(labels=> this.props.dispatchSetLabels(labels))
      // .catch(err => console.error(err));  **/ 
   
    this.togglePopover();
  }
  togglePopover() {

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const {
      checkLists,
      dispatchAddCheckListToBoard,
      idBoard
    } = this.props;
    return (
      <Container>
        
         <Row> <CheckListCreator handleSubmit={this.addingCheckList} /> </Row>
           
      <hr/>
        
      </Container>
    );  
  }
}

const mapStateToProps = ( state, props ) => {
  let idboard =  state.board.idBoard;
  return ({
    checkLists : state.checkLists.filter(checkList => checkList.idBoard === idboard),
    idBoard : idboard
    })
}

const mapDispatchToProps = ( dispatch, props ) => ( {
  dispatchAddCheckListToBoard: (idBoard, name) => {
   console.log("DANS ADD LABEL TO BOARD ", name);
    dispatch(addCheckListToBoard( idBoard, props.idCard, name)) 
  },
  dispatchSetCheckLists : (check) => dispatch(setCheckLists(check)),

});

export default connect(mapStateToProps,mapDispatchToProps)(AddCheckList); 