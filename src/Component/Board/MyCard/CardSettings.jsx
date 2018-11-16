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
import CardDuedate from './CardSettings/CardDuedate';
import CardAddParam from './CardSettings/CardAddParam';

class CardSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen : [false, false, false]
    };
      this.delete = this.delete.bind(this);
  }
 
  closeSettings = () => (this.props.history.goBack());
  
  delete(){
    this.props.dispatchSetCardClosed(this.props.card.id);
    this.props.history.goBack();
  }

  render() {
    const {
      card,
      labels,
      comments,
      dispatchSetCardName,
      dispatchSetCardDueDate,
      dispatchSetCardDesc,
    } = this.props
    const closeBtn = <button className="close" onClick={this.closeSettings}>&times;</button>;

  return (
  <div>
  <Modal key={card.id} size="lg" isOpen={true} toggle={this.closeSettings} className={this.props.className}>
     
    <ModalHeader className="card-settings-header" toggle={this.closeSettings} close={closeBtn}>
      <CardTitle idCard={card.id}/>
    </ModalHeader>

    <ModalBody>
      <Container>
        <Row>
          <Col>
            <CardDescription idCard={card.id}/>
            <hr/>
            <CardDuedate idCard={card.id}/>
            <hr/>
            <CardLabels idCard={card.id}/>  
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
const mapStateToProps = (state, props) => ({
  labels: state.labels.filter(label => label.idCard === props.match.params.idCard),
  card : state.cards.find(card => card.id === props.match.params.idCard),
  comments: state.comments.filter(comment => comment.idCard === props.match.params.idCard)
})

const mapDispatchToProps = (dispatch, props) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings); 