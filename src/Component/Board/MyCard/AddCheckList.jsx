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
    this.props.dispatchAddCheckListToBoard( data.get('checkListName')); 
   // this.props.dispatchAddLabelToBoard(  data.get('labelName'), data.get('color'));  
   /**fetchBoardLabels(this.props.idBoard)
      .then(labels=> this.props.dispatchSetLabels(labels))
      .catch(err => console.error(err));  */ 
   
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
      dispatchAssignCheckListToCard
    } = this.props;
    return (
      <Container>
        <Row> toDo! </Row>
        <Row>
          <Collapse  className="listComment" isOpen={!this.state.popoverOpen}>
            <ListGroup>
              {checkLists.map((checkList) => (
                <ListGroupItem key={checkLists.id} className="labelNamesList">
                  <Badge onClick={  () => dispatchAssignCheckListToCard(checkList.id)}> {checkList.name}</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Collapse>
          <Collapse  isOpen={this.state.popoverOpen}>
          <Card>
          <CardHeader> Create a new toDo-List</CardHeader> 
            <CardBody>
              <CheckListCreator handleSubmit={this.addingLabel} />
            </CardBody>
          </Card>
        </Collapse>
      </Row>
      <hr/>
        <Row className="buttonsSettingCard"> 
          { (!this.state.popoverOpen) ?
            <button  className="buttonCustom" onClick={this.togglePopover}>Create a new toDo-List...</button>:
            <button  className="buttonCustom" onClick={this.togglePopover}>toDo-List existings</button>
          }
        </Row>
      </Container>
    );  
  }
}

const mapStateToProps = ( state, props ) => {
  let idBoard =  state.board.idBoard;
  return ({
    checkLists : state.checkLists.filter(checkList => checkList.idBoard === idBoard),
    idBoard :idBoard
    })
}
const mapDispatchToProps = ( dispatch, props ) => ( {
  dispatchAssignCheckListToCard: (idCheckList) =>{
    dispatch(assignChecklistToCard( props.idCard,idCheckList))
  } ,
  dispatchAddCheckListToBoard: (name) => {
   // console.log("DANS ADD LABEL TO BOARD ",props.idBoard, name,color);
    dispatch(addCheckListToBoard( props.idBoard, props.idCard, name)) 
  },
  dispatchSetCheckLists : (check) => dispatch(setCheckLists(check)),

});

export default connect(mapStateToProps,mapDispatchToProps)(AddCheckList); 