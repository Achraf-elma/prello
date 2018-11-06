// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';



// Components
import CheckItem from '../CheckList/CheckItem';
import Label from './Label';
import { setCardPosition, setCardName } from '../../action/actionCard';

// Style
import '../../style/card.css';

const MyCard = ({
  idcard,
  idlist,
  card
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
     <CardBody> {card.name} <br/> Due date :  {card.dueDate} </CardBody>
    </Card>
  );

const mapStateToProps = (state, props) => ({
  card: state.cards.find(card => card.idcard == props.idcard)

  //desc: state.card.desc,
  //state: state.card.state
  // TODO: Add store state to the component props
})

const mapDispatchToProps = (dispatch, props) => ({
  setCardName: (name) => dispatch(setCardName( props.idcard, name )),

  //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
  // TODO: Add 
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCard); 