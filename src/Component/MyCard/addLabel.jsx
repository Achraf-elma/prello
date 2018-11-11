/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Container, Row, Col , ListGroupItem, ListGroup, Badge} from 'reactstrap';

// Component
import CardCreator from '../Creator/CardCreator';
import LabelCreator from './../../Component/Creator/LabelCreator';

// Actions
import { addLabelToCard } from '../../action/actionLabel';
import { addLabelToBoard } from '../../action/actionBoard';

class AddLabel extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      popoverOpen: false
    };
    this.togglePopover = this.togglePopover.bind(this);

  }


  addingLabel(event){
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.dispatchAddLabelToCard( this.props.idcard,event, data.get('labelName'), data.get('color')); 
    this.togglePopover();
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const {
      idcard,
      board
    } = this.props;
    return (
        <Container>
          <Row>
            Labels
          </Row>
          <Row>
                <ListGroup className="listComment">
             {board.labelNames.map((label, index) => (
               
                <ListGroupItem>
                  <Badge onClick={this.addLabelToCard(idcard,index, label[index])} color={index} pill>{label[index]}</Badge>
                </ListGroupItem>
              
              ))}
              </ListGroup>
            </Row>
            <hr/>
            <Row>
              <button id= {"card-add-label"+idcard} onClick={this.togglePopover}>Create a new label...</button>
            <Popover placement="left" isOpen={this.state.popoverOpen} target={`card-add-label${idcard}`} toggle={this.togglePopover}>
            <PopoverHeader>Create a new label</PopoverHeader>
              <PopoverBody>
                <LabelCreator handleSubmit={this.addingLabel} />
              </PopoverBody>
          </Popover>
            </Row>

        </Container>
    
    );  
  }
}

const mapStateToProps = ( state, props ) => ({
  board : state.boards.find(board => board.id = props.idBoard)
})

const mapDispatchToProps = ( dispatch, props ) => ( {
   dispatchAddLabelToCard: (id, name, color) =>  dispatch(addLabelToCard( id, name, color)),
   dispatchAddLabelToBoard: (id, name, color) =>  dispatch(addLabelToBoard( id, name, color)) 


});

export default connect(mapStateToProps,mapDispatchToProps)(AddLabel); 