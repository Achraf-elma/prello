// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { addNewBoardId, removeBoardId } from '../../action/actionOrganization';

// Components
//import  from './'


const Organization = ({
  displayName,
  boards
}) => (
  <div className="Organization">
    <h1>{displayName}</h1>
    
  </div>
);

const mapStateToProps = (state, props) => ({
  displayName: state.organization.displayName,
  boards: state.organization.boards
})

const mapDispatchToProps = (dispatch, props) => ({

  dispatchAddNewBoardId: (boardId) => dispatch(addNewBoardId(props.id, boardId)),
  dispatchRemoveBoardId: (boardId) => dispatch(removeBoardId(props.id, boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Organization); 