// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';
import CheckItem from '../CheckList/CheckItem';
import checkItem from '../../reducer/checkItem';

// Components
// TODO: Import direct children components

const Card = ({
  id,
  desc,
  state,
  setCheckCardState, 
  changeCardDesc
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
   <div className="card">
   <h1>{desc} {id} {state}</h1>
   <hr/>
    <input type="text" value={desc}  onChange={changeCardDesc}/>
  
</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card); 