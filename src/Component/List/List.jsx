// Modules

import React from 'react';
import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootswatch/dist/lumen/bootstrap.min.css';
import '../../style/App.css';
import '../../style/list.css';
import{Card , CardBody, CardTitle, Button, CardText} from 'reactstrap';
import MyCard from '../MyCard/MyCard';

// Action builder
import { setListPosition, setListName } from '../../action/actionList';


// Components
// TODO: Import direct children components

const List = ({
  name,
  //pos,
  setListName, 
  setListPosition,
}) => (
// TODO: Create JSX DOM
  
      <Card className="list">
      <CardBody>
          <CardTitle className="list-title">{name}</CardTitle>
          <hr/>
          <MyCard></MyCard>
          <MyCard></MyCard>
          <MyCard></MyCard>
        </CardBody>
      </Card>
  
);
 
const mapStateToProps = ( state, props ) => ({
  
  //id : state.list.id,
  /*closed : state.list.closed,
  idBoard : state.list.idBoard,
  pos : state.list.pos,
  subscribed : state.list.subscribed */
    })

const mapDispatchToProps = ( dispatch, props ) => {
  return {
    setListName: (name) => dispatch(setListName( props.id, name ))

  }
}

//export default Board // TODO: Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(List); 