// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, ListGroup, ListGroupItem, Container} from 'reactstrap';

import CommentCreator from '../../CommentCreator';

// Actions
import { addCommentToCard } from '../../../../action/actionComment';


const CardComments = ({comments, dispatchAddCommentToCard}) => (
<div>
  <Row className="labelField" xs="6">Comments :</Row>  
  <Container className="comments" >
    
     <Row>
     <ListGroup className="listComment">
  {comments.map((comment) => (
    
 
     <ListGroupItem>
       <span className="commentMember">> NONAME </span>
       <span className="commentDate">({comment.date}) : </span>
       <span className="commentText">{comment.text}</span>
       </ListGroupItem>
   
   ))}
   </ListGroup>
      </Row>
  </Container>
  
  <Row>
    <Col>
      <CommentCreator handleSubmit={dispatchAddCommentToCard}/>
    </Col>
  </Row>

</div>
  );

const mapStateToProps = (state, props) => ({
  comments: state.comments.filter(comment => comment.idCard === props.idCard),
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddCommentToCard: (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch(addCommentToCard( props.idCard,  null, data.get('text'))) 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardComments); 