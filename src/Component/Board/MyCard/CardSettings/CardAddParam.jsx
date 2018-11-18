// Modules
import React from 'react';
import { connect } from 'react-redux';
import {Row,Col, ListGroup, ListGroupItem, Container, Popover, PopoverBody, PopoverHeader} from 'reactstrap';


import AddLabel from '../AddLabel';
import AddMember from '../AddMember';


class CardAddParam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen : [false, false, false]
    };
      this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover(popoverNumber) {
    let currentState = this.state.popoverOpen[popoverNumber];
    let newState = [...this.state.popoverOpen];
    newState[popoverNumber] = !currentState;
    this.setState({
      popoverOpen: newState
    });
  }

render() {
  const {
    card
  } = this.props;
  return (
    <div>
      <h4><i className="fa fa-plus" aria-hidden="true"></i> &nbsp;Add</h4><hr/>

        <button className="addElementButton" id={"card-member"+card.id} onClick={() => this.togglePopover(1)}>  <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp; Member</button> <br/>
        <button className="addElementButton" id={"card-label"+card.id} onClick={() => this.togglePopover(0)}><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Label</button> <br/>
        <button className="addElementButton"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp; Checklist</button><br/>

        <Popover placement="right" isOpen={this.state.popoverOpen[0]} target={"card-label"+card.id} toggle={() => this.togglePopover(0)}>
          <PopoverHeader>Labels</PopoverHeader>
          <PopoverBody>
            <AddLabel idCard={card.id}  idBoard= {card.idBoard} />
          </PopoverBody>
        </Popover>

        <Popover placement="right" isOpen={this.state.popoverOpen[1]} target={"card-member"+card.id} toggle={() => this.togglePopover(1)}>
        <PopoverHeader>Member</PopoverHeader>
        <PopoverBody>
          <AddMember idCard={card.id} />
        </PopoverBody>
      </Popover>
    </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  labels: state.labels.filter(label => label.idCard === props.idCard),
  card : state.cards.find(card => card.id === props.idCard),
  comments: state.comments.filter(comment => comment.idCard === props.idCard)
})

const mapDispatchToProps = (dispatch, props) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CardAddParam); 