// Modules
import React from 'react';

// Action builder
import '../style/homepage.css';


// Components
// TODO: Import direct children components

const Homepage = ({
  
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
  <div className="jumbotron headerImage">
  <div>
</div>
  <h1 className="display-3">Prello!</h1>
  <p className="lead">A simple way to manage yours projects</p>
  <hr className="my-4"/>
  <p>Collaborate with yours teams</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Start now</a>
  </p>
</div>
  
  );

const mapStateToProps = (state, props) => ({

  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
  // changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
  // TODO: Add 
})

export default Homepage; 