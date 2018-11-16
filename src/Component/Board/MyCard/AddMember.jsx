import React from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col , ListGroupItem, ListGroup} from 'reactstrap';



import {  assignMemberToCard } from '../../../action/actionCard';

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

const mapStateToProps = ( state, props ) => {
let card = state.cards.find(card => card.id == props.idCard)
let board = state.boards
return({
  card : card,
  board : board.find(board => board.id == card.idBoard),
  })
}

const mapDispatchToProps = ( dispatch, props ) => ( {
   dispatchAssignMemberToCard: (idMember) =>{
     console.log(props.idCard, idMember);
     dispatch(assignMemberToCard( props.idCard, idMember))
   } 
});

export default connect(mapStateToProps,mapDispatchToProps)(AddMember); 