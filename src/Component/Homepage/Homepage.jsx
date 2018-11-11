// Modules
import React from 'react';
import { Link } from "react-router-dom";

// Component
import CarouselofFeatures from './CarouselofFeatures';

// Styles
import '../../style/homepage.css';


const Homepage = () => (
  <div>
    <div className="homepage-background"/>
    <div className="headerContent ">
      <div className="container">
        <h1 className="title">Quick, simple and productive</h1>
        <hr style={{background: ' rgb(4, 27, 51)', width: 30 + '%'}} className="my-4"/>
        <CarouselofFeatures style={{position: "relative"}}></CarouselofFeatures>
        <p>
        <Link to="/signup" className="btn btn-primary btn-lg">Start now</Link>
        </p>
      </div>
    </div>
  </div>
);
export default Homepage; 