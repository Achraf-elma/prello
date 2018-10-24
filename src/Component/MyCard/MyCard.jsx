// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';


// Components
import CheckItem from '../CheckList/CheckItem';
import Label from './Label';
import { setCardPosition, setCardName } from '../../action/actionCard';

// Style
import '../../style/card.css';

const MyCard = ({
  id,
  desc,
  name,
  state,
  setCheckCardState, 
  changeCardDesc
  // TODO: Put destructured props
  // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
   <Card className="mycard" >
     <CardHeader className="mycard-header">
      <table>
        <tr>
          <td><Label color="red"/></td>
          <td><Label color="blue"/></td>
        </tr>
      </table>
     </CardHeader>
     <CardBody>{name}</CardBody>
    </Card>
  );

const mapStateToProps = (state, props) => ({
  desc: state.card.desc,
  state: state.card.state
  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  setCardName: (name) => dispatch(setCardName( props.id, name )),

  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
   changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 