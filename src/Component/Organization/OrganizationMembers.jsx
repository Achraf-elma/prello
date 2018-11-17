// Modules

import uuidv4 from "uuidv4";
import React from 'react';
import { connect } from 'react-redux';

import { Button, Form, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

// Action builder
import {addNewTeamMember, deleteTeamMember, setTeamMemberType} from '../../action/actionOrganization';

import InputText from '../Input/InputText';

const OrgMembers = ({
  memberships,
  dispatchForm,
  dispatchdeleteTeamMember,
  dispatchSetTeamMemberType
}) => (
  <div className="OrgMembers">
    <h1 className="organization-title">Members management</h1>
    <Form onSubmit = {(event) => dispatchForm(event, memberships)}>
      <Label className="organization-labels" for="newMemberEmail">Add member :</Label>
      <InputText
        className="addEmail"
        type = "email" 
        id="newMemberEmail"
        placeHolder="Enter an email address here"
        resetable
        name="email"
        onChange={() => dispatchForm}
        
      />
      <Button color="success" className="submit" type="submit" active>Send</Button>
    </Form>
    <ListGroup>
      {memberships.map(member => (
        <span key={member.idMember}>
          <ListGroupItem>
            {member.email} 
            <Button color="danger" onClick={() => (dispatchdeleteTeamMember(member.idMember))}> X </Button>
            <Button color="warning" onClick={() => (dispatchSetTeamMemberType(member))}> Give rights</Button>
            {member.idMember}
          </ListGroupItem>
        </span>
      ))}
    </ListGroup>
  </div>
);



const mapStateToProps = (state, props) => ({
id : state.organization.id,
displayName: state.organization.displayName,
memberships: state.organization.memberships
})

const mapDispatchToProps = (dispatch, props) => ({
dispatchForm: (event, memberships) => {
event.preventDefault();
const data = new FormData(event.target);
if (data.get('email') !== '' && !memberships.some(e => e.email === data.get('email'))) {
const newTeamMember = {
id : props.id,
idMember : uuidv4(),
email: data.get('email'),
memberType: "normal",
unconfirmed: true
}
dispatch(addNewTeamMember(props.id, newTeamMember))
}
},
dispatchdeleteTeamMember: (teamMemberToDelete) => dispatch(deleteTeamMember(props.id, teamMemberToDelete)),
dispatchSetTeamMemberType: (teamMemberToSetType) => dispatch(setTeamMemberType(props.id, teamMemberToSetType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrgMembers); 