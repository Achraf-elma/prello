// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { setCheckItemState } from '../../action/actionCheckItem';

// Components
// TODO: Import direct children components

const CheckItem = ({
  name,
  state,
  setCheckItemState
}) => (
  <div className="CheckItem">
    <label>
        <input type="checkbox" checked={state === "complete"} onChange={() => setCheckItemState(state !== "complete" )}/>
        {name}
        {state}
    </label>
  </div>
);

const mapStateToProps = (state, props) => ({
  name: state.checkItem.name,
  state: state.checkItem.state
})

const mapDispatchToProps = (dispatch, props) => ({
  setCheckItemState: (complete) => dispatch(setCheckItemState( props.id, complete ))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckItem); 