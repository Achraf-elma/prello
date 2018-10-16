// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { addNewListItem } from '../../action/actionChecklist';

// Components
import CheckItem from './CheckItem'

const CheckList = ({
  name,
  checklistItems,
  addNewListItem
}) => (
  <div className="CheckList">
    <label>
        {name}
    </label>
    
    <h4>{checklistItems.map}</h4>
    <button onClick ={() => addNewListItem("hello")}>Add Item</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  name: state.checkList.name,
  checklistItems: state.checkList.checklistItems
})

const mapDispatchToProps = (dispatch, props) => ({
  addNewListItem: (item) => dispatch(addNewListItem(props.id, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckList); 