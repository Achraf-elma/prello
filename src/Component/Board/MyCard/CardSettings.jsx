// Modules
import React from 'react';
import { connect } from 'react-redux';
import {
  Col, Row, Container,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components

// Style
import '../../../style/cardsettings.css';
import CardTitle from './CardSettings/CardTitle';
import CardDescription from './CardSettings/CardDescription';
import CardLabels from './CardSettings/CardLabels';
import CardComments from './CardSettings/CardComments';
import CardDuedate from './CardSettings/CardDueDate';
import CardAddParam from './CardSettings/CardAddParam';
import CardCheckList from './CardSettings/CardCheckList';
import CardMember from './CardSettings/CardMember';
import { setCardClosed } from '../../../action/actionCard';
import {fetchComments} from '../../../request/card'
import { setComments } from '../../../action/actionComment';
//import {fetchUser} from '../../../request/user'; 

class CardSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen : [false, false, false],
      members :[]
    };
      this.delete = this.delete.bind(this);
  }
 
  closeSettings = () => (this.props.history.goBack());
  
  delete(){
    this.props.dispatchSetCardClosed(this.props.card.id);
    console.log(this.props.card.id);
    this.props.history.goBack();
  }
  // getUserNameById=(idMember) => {
  //   var userName = fetchUser(idMember)
  //     .then(member => member.fullName )

  //     return userName;
  // }
 
componentDidMount(){
  fetchComments(this.props.match.params.idCard)
  .then(comment => console.log("FETCHE", comment) ||this.props.dispatchComments(comment))
  .catch(error => console.error(error))
} 


  render() {
    const {
      card, labels, checkLists, comment
    } = this.props
    const closeBtn = <button className="close" onClick={this.closeSettings}>&times;</button>;
    if(!card && !comment){
      return (
        <Modal size="lg" isOpen={true} toggle={this.closeSettings} className={this.props.className}>
        loading
        </Modal>
      )
    }
  return (
  <div>
  <Modal size="lg" isOpen={true} toggle={this.closeSettings} className={this.props.className}>
     
    <ModalHeader className="card-settings-header" toggle={this.closeSettings} close={closeBtn}>
      <CardTitle idCard={card.id}/>
    </ModalHeader>

    <ModalBody>
      <Container>
        <Row>
          <Col>
            <CardDescription idCard={card.id} />
            <hr/>
            <CardDuedate idCard={card.id}/>
            <hr/>
             <CardMember idCard={card.id}/> 
             <hr/>
             <CardLabels idCard={card.id}/> 
            <hr/>
             <CardCheckList idCard={card.id}/> 
            <hr/>
            <CardComments idCard={card.id}/>
            
          </Col>
          <Col className="buttonsSettingCard" xs="3">
            <CardAddParam idCard={card.id}/>
          </Col>
        </Row>
      </Container>
    </ModalBody>

    <ModalFooter>
      <button className="deleteCard" onClick={this.delete}>Delete</button>
    </ModalFooter>
  </Modal>
  </div>
    );
  }
}
const mapStateToProps = (state, props) => console.log(state.comments) || ({
  labels: state.labels.filter(label => label.idCard === props.match.params.idCard),
  checkLists: state.checkLists.filter(checkList => checkList.idCard === props.idCard),
  card : state.cards.find(card => card.id.toString()=== props.match.params.idCard),
   comments: state.comments.filter(comment => comment.idCard === props.idCard) ,

})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardClosed : (id) => dispatch(setCardClosed(id, true)),
  dispatchComments : (comments) => dispatch(setComments(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 