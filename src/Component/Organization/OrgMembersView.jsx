// Modules
import React from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col , Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Action builder
import {addNewTeamMember, deleteTeamMember, setTeamMemberType} from '../../action/actionOrganization';


const onSubmitHandler = (event) => {
    event.preventDefault();
}

const OrgMembers = ({
    displayName,
    memberships,
    invitations,
    dispatchForm
  }) => (


    <div className="OrgMembers">
        <h1>Manage members</h1>
        <Form onSubmit = {dispatchForm}>
            <Label for="newMemberEmail">Add member :</Label>
            <Input type = "email" name ="email" id="newMemberEmail" placeholder="Enter an email address here"/>
            <Button color="success" className="submit" type="submit" active>Send</Button>
        </Form>


        {memberships.forEach(element => {
            return element.idMember
        })}
    </div>
  );


  
  const mapStateToProps = (state, props) => ({
    displayName: state.organization.displayName,
    memberships: state.organization.memberships,
    invitations: state.organization.invitations
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    dispatchForm: (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if (data.get('email') !== '') {dispatch(addNewTeamMember(props.id, data.get('email')))}
    },
    dispatchdeleteTeamMember: (teamMemberToDelete) => dispatch(deleteTeamMember(props.id, teamMemberToDelete)),
    dispatchSetTeamMemberType: (teamMemberToSetType, newType) => dispatch(setTeamMemberType(props.id, teamMemberToSetType, newType)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrgMembers); 