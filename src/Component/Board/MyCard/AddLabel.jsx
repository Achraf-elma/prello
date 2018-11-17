/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Card, Collapse, CardBody, CardHeader, Container, Row, Col , ListGroupItem, ListGroup, Badge} from 'reactstrap';

// Component
import LabelCreator from './../LabelCreator';

// Actions
import { addLabelToCard, setLabels } from '../../../action/actionLabel';
import { addLabelToBoard } from '../../../action/actionBoard';
import { fetchBoardLabels } from '../../../request/board';

class AddLabel extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      popoverOpen: false
    };
    this.togglePopover = this.togglePopover.bind(this);
    this.addingLabel = this.addingLabel.bind(this);
  }
  addingLabel(event){
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.dispatchAddLabelToCard( data.get('labelName'), data.get('color')); 
    this.props.dispatchAddLabelToBoard(  data.get('labelName'), data.get('color'));  
    fetchBoardLabels(this.props.idBoard)
      .then(labels=> this.props.dispatchSetLabels(labels))
      .catch(err => console.error(err));
   
    this.togglePopover();
  }
  togglePopover() {

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const {
      labelNames,
      idCard,
      dispatchAddLabelToCard,
      dispatchAddLabelToBoard
    } = this.props;
    return (
      <Container>
        <Row> Labels </Row>
        <Row>
          <Collapse  className="listComment" isOpen={!this.state.popoverOpen}>
            <ListGroup>
              {labelNames.map((label) => (
                <ListGroupItem key={label.color} className="labelNamesList">
                  <Badge onClick={  () => dispatchAddLabelToCard(label.text || " ", label.color)} className="labelNamesBadge" style={{color : '#fff', background : label.color }} pill> {label.text}</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Collapse>
          <Collapse  isOpen={this.state.popoverOpen}>
          <Card>
          <CardHeader> Create a new label </CardHeader> 
            <CardBody>
              <LabelCreator handleSubmit={this.addingLabel} />
            </CardBody>
          </Card>
        </Collapse>
      </Row>
      <hr/>
        <Row className="buttonsSettingCard"> 
          { (!this.state.popoverOpen) ?
            <button  className="buttonCustom" onClick={this.togglePopover}>Create a new label...</button>:
            <button  className="buttonCustom" onClick={this.togglePopover}>Labels of this board.</button>
          }
        </Row>
      </Container>
    );  
  }
}

const mapStateToProps = ( state, props ) => ({

  idBoard : state.board.idBoard,
  labelNames : Object.keys( state.board.labelNames ).map( key => ({ color: key, text: state.board.labelNames[key] })),
})

const mapDispatchToProps = ( dispatch, props ) => ( {
  dispatchAddLabelToCard: (name, color) =>{
    console.log(props.idBoard, name,color);
    dispatch(addLabelToCard( props.idCard,props.idBoard, name, color))
  } ,
dispatchAddLabelToBoard: (name, color) => {
  console.log("DANS ADD LABEL TO BOARD ",props.idBoard, name,color);
    dispatch(addLabelToBoard( props.idBoard, name, color)) 
  },
  dispatchSetLabels : (labels) => dispatch(setLabels(labels)),

});

export default connect(mapStateToProps,mapDispatchToProps)(AddLabel); 