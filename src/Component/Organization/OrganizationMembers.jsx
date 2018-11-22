// Modules
import React from 'react';
import { connect } from 'react-redux';

import { Button, Form, Label, ListGroup, ListGroupItem } from 'reactstrap';

// Action builder
import { addMemberToOrganization, removeMemberFromOrganization, setOrganizationOwner } from '../../action/actionOrganization';

// http 
import client from '../../request/client';
import { inviteMemberToOrganization, fireMemberFromOrganization, transfertOrganizationOwnership } from '../../request/organization';

class OrganizationMembers extends React.Component {
  constructor(){
    super();
    this.state = { message: ""};
  }
  fireMember = (member) => {
    fireMemberFromOrganization(this.props.match.params.idOrganization, member.id)
    .then( ok => {
      this.props.dispatchRemoveMemberFromOrganization( member.id );
      this.setState({ message: `${member.fullName} removed from the organization`})
    })
    .catch( error => console.error(error) || this.setState({message: `Couldn't fired ${member.fullName} from organization`}))
  }
  setOwner = (member) => {
    transfertOrganizationOwnership(this.props.match.params.idOrganization, member.id)
    .then( ok => {
      this.props.dispatchSetOrganizationOwner(member.id, client.getCredentials());
      this.setState({ message: `${member.fullName} is the new organization owner` });
    })
    .catch(error => this.setState({ message: `Coudn't transfer ownership to ${member.fullName}` }))
  }
  inviteMember = (event) => {
    event.preventDefault();
    let email = this.mailInput.current.value && this.mailInput.current.value.replace(/(^\s*)|(\s*$)/g, "");
    if (email && !this.props.members.find(member => member.email === email)) {
      // Send to DB
      inviteMemberToOrganization(this.props.match.params.idOrganization, email)
      .then( member => {
        this.props.dispatchAddMemberToOrganization(member);
        this.setState({message: `${member.fullName} joined the organization`});
        this.mailInput.current.value = "";
      })
      .catch( error => this.setState({message: `${email} wasn't added to the organization`}));
      // put in props
    }
  }
  render() {
    this.mailInput = React.createRef();
    const {
      isOwner,
      members,
    } = this.props;
    return (
      <div className="OrganizationMembers">
        <h1 className="organization-title">Members management</h1>
        { isOwner && (
          <Form onSubmit={this.inviteMember}>
            <Label className="organization-labels" for="newMemberEmail">Add member :</Label><br/>
            <input
              className="addEmail"
              type="email"
              ref={this.mailInput}
              id="newMemberEmail"
              placeholder="Enter an email address here"
              name="email"
            />
            <Button color="success" className="submit" type="submit" active>Send invitation</Button>
            {this.state.message && <strong>{this.state.message}</strong>}
          </Form>
        )}

        <ListGroup>
          {members.map(member => console.log(member) || (
            <span key={member.email}>
              <ListGroupItem>
                {isOwner && (
                  <span>
                    <input type="button" className="btn btn-danger btn-sm" onClick={() => this.fireMember(member)} value="X" />
                    <input type="button" className="btn btn-warning btn-sm mr-2" onClick={() => this.setOwner(member)} value="transfer owner" />
                  </span>
                )}
                {member.email}
              </ListGroupItem>
            </span>
          ))}
        </ListGroup>
      </div>
    );
  }
}



const mapStateToProps = (state, props) => ({
  isOwner: state.organization.isOwner,
  members: state.organization.members,
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddMemberToOrganization: (member) => dispatch(addMemberToOrganization(member)),
  dispatchRemoveMemberFromOrganization: (idMember) => dispatch(removeMemberFromOrganization(idMember)),
  dispatchSetOrganizationOwner: (idMember, exOwner) => dispatch(setOrganizationOwner(idMember, exOwner)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationMembers); 