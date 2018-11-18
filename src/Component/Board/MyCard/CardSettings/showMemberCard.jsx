// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, Badge} from 'reactstrap';

// Actions
import { setCardDesc } from '../../../../action/actionCard';


const ShowMemberCard = ({member}) => (

   <Col>
        <Badge style={{color : '#fff', background : 'bleu', width: '100%', minHeight: '20px'}} pill>{member.fullName}</Badge>
    </Col>
    
);

const mapStateToProps = (state, props) => console.log(state) || ({
  member : state.board.members.find(member => member._id === props.idMember),
})

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMemberCard); 