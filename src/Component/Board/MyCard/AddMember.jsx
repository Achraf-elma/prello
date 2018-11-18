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
             {board.members.map((member) => (
               <ListGroupItem 
               key={member.id}
               className="membersOnCard"
                 onClick={  () => dispatchAssignMemberToCard(idCard, member.id)} > 
                 {member.fullName}
               </ListGroupItem>
             ))}
             </ListGroup>
          </Row>
            <hr/>
        </Container>
    
    );  
  }
}

const mapStateToProps = ( state, props ) => console.log(state.board) || ({
   card : state.cards.find(card => card.id == props.idCard),
   board : state.board
})

const mapDispatchToProps = ( dispatch, props ) => ( {
   dispatchAssignMemberToCard: (idMember) =>{
     console.log(props.idCard, idMember);
     dispatch(assignMemberToCard( props.idCard, idMember))
   } 
});

export default connect(mapStateToProps,mapDispatchToProps)(AddMember); 