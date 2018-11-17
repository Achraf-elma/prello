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
import { fetchCardLabels } from '../../../request/board';

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
    this.props.dispatchAddLabelToCard( this.props.idCard, data.get('labelName'), data.get('color')); 
    this.props.dispatchAddLabelToBoard( this.props.idBoard, data.get('labelName'), data.get('color'));  
    fetchCardLabels(this.props.idCard,this.props.idBoard)
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
                <ListGroupItem className="labelNamesList">
                  <Badge onClick={  () => dispatchAddLabelToCard(idCard,label.text || " ", label.color)} className="labelNamesBadge" style={{color : '#fff', background : label.color }} pill> {label.text}</Badge>
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
  dispatchAddLabelToCard: (id, name, color) =>{
    console.log(id, name,color);
    dispatch(addLabelToCard( id, name, color))
  } ,
dispatchAddLabelToBoard: (id, name, color) => {
  console.log(id, name,color);
    dispatch(addLabelToBoard( id, name, color)) 
  },
  dispatchSetLabels : (labels) => dispatch(setLabels(labels)),

});

export default connect(mapStateToProps,mapDispatchToProps)(AddLabel); 