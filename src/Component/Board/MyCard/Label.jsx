// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';
import classNames from 'classnames';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';


// Components
import CheckItem from '../CheckList/CheckItem';



// Style
import '../../style/card.css';


const Label = ({
  id,
  name, 
  color 
}) => (
   <div className={classNames("label", color)}/> 
  );


export default (Label); 