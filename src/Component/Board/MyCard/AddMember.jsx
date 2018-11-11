import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Card, Collapse, CardBody, CardHeader, Container, Row, Col , ListGroupItem, ListGroup, Badge} from 'reactstrap';



import { assignChecklistToCard, assignMemberToCard } from '../../../action/actionCard';

class AddMember extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      labelNames,
      idCard,
      board,
      dispatchAssignMemberToCard,
      dispatchAddLabelToBoard
    } = this.props;
    return (
        <Container>
          <Row>Members</Row>
          <Row>
             <ListGroup>
             {board.memberships.map((member) => (
               <ListGroupItem 
               key={member.id}
               className="membersOnCard"
                 onClick={  () => dispatchAssignMemberToCard(idCard, member.id)} > 
                 {member.id}
               </ListGroupItem>
             ))}
             </ListGroup>
          </Row>
            <hr/>
        </Container>
    
    );  
  }
}

const mapStateToProps = ( state, props ) => ({
  board : state.boards.find(board => board.id == props.idBoard),
})

const mapDispatchToProps = ( dispatch, props ) => ( {
   dispatchAssignMemberToCard: (id, idmember) =>{
     console.log(id, idmember);
     dispatch(assignMemberToCard( id, idmember))
   } 



});

export default connect(mapStateToProps,mapDispatchToProps)(AddMember); 