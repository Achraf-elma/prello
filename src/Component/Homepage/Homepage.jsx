// Modules
import React from 'react';
import '../../style/homepage.css';
import CarouselofFeatures from './CarouselofFeatures';



const Homepage = () => (
  <div>
  <div className="homepage-background"/>
<div className="headerContent ">
    <div className="container">
        <h1 className="title">Quick, simple and productive</h1>
        <hr  style={{background: ' rgb(4, 27, 51)', width: 30 + '%'}} className="my-4"/>
        <CarouselofFeatures style = "position: relative"></CarouselofFeatures>
        <p>
        <button type="button" class="btn btn-primary btn-lg">Start now</button>
         </p>
      </div>
</div>
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