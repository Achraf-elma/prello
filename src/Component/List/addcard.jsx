/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


import CardCreator from '../Creator/CardCreator';
import { moveCardInList, addCardToList, addCardToCalendar} from '../../action/actionList';


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
      idlist, 
      dispatchAddCardToList,
      listName
    } = this.props;
    return (
      <div>
        <button className="add-card-link" id= {"list" +idlist} onClick={this.toggle}>
        <span className="fa fa-plus-circle">Add Card</span>  
        </button>
        <Popover placement="left" isOpen={this.state.popoverOpen} target={`list${idlist}`} toggle={this.toggle}>
          <PopoverHeader>Add Card</PopoverHeader>
          <PopoverBody>
             <CardCreator closeToggle={this.toggle} handleSubmit={dispatchAddCardToList} />
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
      addCardToCalendar(props.idlist, data.get('cardName'), data.get('dueDate')) )
    dispatch( 
        addCardToList( props.idlist, data.get('cardName'), data.get('dueDate')) ) 
  }
  
 
});

export default connect(mapStateToProps,mapDispatchToProps)(AddCard); 