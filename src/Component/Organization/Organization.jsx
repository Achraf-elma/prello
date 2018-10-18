// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { setTeamName, setTeamDesc, setTeamWebsite, addNewTeamMember, deleteTeamMember, setTeamMemberType, addNewBoardId, removeBoardId } from '../../action/actionOrganization';

// Components
//import  from './'

//TODO
const Organization = ({
  name
}) => (
  <div className="Organization">
    <label>
        {name}
    </label>
  </div>
);

const mapStateToProps = (state, props) => ({
  name: state.organization.name,
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetTeamName: (newName) => dispatch(setTeamName(props.id, newName)),
  dispatchSetTeamDesc: (newDesc) => dispatch(setTeamDesc(props.id, newDesc)),
  dispatchSetTeamWebsite: (newWebsite) => dispatch(setTeamWebsite(props.id, newWebsite)),
  dispatchAddNewTeamMember: (newTeamMember) => dispatch(addNewTeamMember(props.id, newTeamMember)),
  dispatchdeleteTeamMember: (teamMemberToDelete) => dispatch(deleteTeamMember(props.id, teamMemberToDelete)),
  dispatchSetTeamMemberType: (teamMemberToSetType, newType) => dispatch(setTeamMemberType(props.id, teamMemberToSetType, newType)),
  dispatchAddNewBoardId: (boardId) => dispatch(addNewBoardId(props.id, boardId)),
  dispatchRemoveBoardId: (boardId) => dispatch(removeBoardId(props.id, boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Organization); 