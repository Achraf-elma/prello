// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { addNewChecklistItem, deleteChecklistItem } from '../../action/actionChecklist';


// Components
//import CheckItem from './CheckItem'

const CheckList = ({
  name,
  checklistItems,
  dispatchAddNewChecklistItem,
}) => (
  <div className="CheckList">
    <label>
        {name}
    </label>
    <h4>{checklistItems}</h4>
    <button onClick ={() => dispatchAddNewChecklistItem("hello")}>Add Item</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  name: state.checkList.name,
  checklistItems: state.checkList.checklistItems
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddNewChecklistItem: (item) => dispatch(addNewChecklistItem(props.id, item)),
  dispatchDeleteChecklistItem: (item) => dispatch(deleteChecklistItem(props.id, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckList); 