/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Container, Row, Col } from 'reactstrap';

// Component
import CardCreator from '../Creator/CardCreator';

// Actions
import { addLabelToCard } from '../../action/actionLabel';

class AddLabel extends React.Component {
  constructor(props) {
    super(props);
 
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
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

        </Container>
    
    );  
  }
}

const mapStateToProps = ( state, props ) => ({
  board : state.boards.find(board => board.id = props.id)
})

const mapDispatchToProps = ( dispatch, props ) => ( {
   dispatchAddLabelToCard: (id, name, color) =>  dispatch(addLabelToCard( id, name, color)) 

});

export default connect(mapStateToProps,mapDispatchToProps)(AddLabel); 