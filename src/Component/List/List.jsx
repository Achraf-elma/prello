// Modules

import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import '../../style/App.css'
import{Card , CardBody, CardTitle, Button, CardText} from 'reactstrap'


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
  
      <Card body outline color="primary" id="List" >
     
      <CardBody>
          <CardTitle> {name}</CardTitle>
          <CardText>  </CardText>

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