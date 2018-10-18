// Modules
// TODO: Import react (it avert the transpiler it needs JSX )
import React from 'react';
// TODO: Import connect from react-redux
import {connect} from 'react-redux';

// Action builder
// TODO: Import action builder
import {setBoardClose} from '../../action/actionBoard';
import {setBoardDesc} from '../../action/actionBoard';

// Components
// TODO: Import direct children components
//import list when implemented

const Board = ({
  name, 
  desc, 
  memberships, 
  closed, 
  pos, 
  setBoardClose, 
  setBoardDesc
}) => (
  <div className="Board">
    <label>
        <button onClick={() => setBoardClose(closed !== "true" )} >Click Me</button>
        {closed}
    </label>
    <input type="text" value={desc}  onChange={setBoardDesc}/>
    {desc}
  </div>
);

const mapStateToProps = ( state, props ) => ({
    // TODO: Add store state to the component props
  name: state.board.name,
  desc: state.board.desc,
  memberships: state.board.memberships,
  closed: state.board.closed,
  pos: state.board.pos,
})

const mapDispatchToProps = ( dispatch, props ) => ({
  //TODO: Add
  setBoardClose: (closed) => dispatch(setBoardClose(props.id, closed)),
  setBoardDesc: (event) => dispatch(setBoardDesc(props.id, event.target.value))
})

// TODO: Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 