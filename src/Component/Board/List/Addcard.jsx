/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

// Component
import CardCreator from './CardCreator';

// Actions
import {addCardToList} from '../../action/actionList';

class AddCard extends React.Component {
  constructor(props) {
    super(props);
 
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const {
      idList, 
      dispatchAddCardToList
    } = this.props;
    return (
      <div>
        <button className="add-card-link" id= {"list" +idList} onClick={this.toggle}>
        <span className="fa fa-plus-circle"> Add Card</span>  
        </button>
        <Modal isOpen={this.state.popoverOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Add Card</ModalHeader>
          <ModalBody>
          <CardCreator closeToggle={this.toggle} handleSubmit={dispatchAddCardToList} />
          </ModalBody>
        </Modal>
        <Popover placement="bottom"  target={`list${idList}`} toggle={this.toggle}>
          <PopoverHeader></PopoverHeader>
          <PopoverBody>
          </PopoverBody>
        </Popover>
      </div>
    );  
  }
}

const mapStateToProps = ( state, props ) => ({
})

const mapDispatchToProps = ( dispatch, props ) => ( {
  dispatchAddCardToList: (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch(
        addCardToList( props.idList, data.get('cardName'), data.get('dueDate')) 
        ) 
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(AddCard); 