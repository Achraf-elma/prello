// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';


// Components
import CheckItem from '../CheckList/CheckItem';




// Style
import '../../style/card.css';


const MyCard = ({
  id,
  desc,
  state,
  setCheckCardState, 
  changeCardDesc
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
   <Card className="mycard">
     <CardHeader>{desc}</CardHeader>
     <CardBody>{desc}</CardBody>
    </Card>
  );

const mapStateToProps = (state, props) => ({
  desc: state.card.desc,
  state: state.card.state
  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
   changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 