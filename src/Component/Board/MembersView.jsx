// Modules
import React from 'react';
import { connect } from 'react-redux';

import { Button, Form, Label, ListGroup, ListGroupItem } from 'reactstrap';

// Action builder
import {
  addMemberToBoard,
  removeMemberFromBoard,
  setBoardOwner,
  addOrganizationToBoard,
  removeOrganizationFromBoard
} from '../../action/actionMembers';

// http 
import client from '../../request/client';
import { retireMemberFromBoard, transfertBoardOwnership, inviteMemberToBoard, inviteOrganizationToBoard, expulseOrganizationFromBoard } from '../../request/board';
import { fetchUserOrganizations } from '../../request/user';

class MembersView extends React.Component {
  constructor() {
    super();
    this.state = { message: "", userOrganizations: [], organizationMessage:"" };
  }
  componentDidMount() {
    fetchUserOrganizations()
      .then(userOrganizations => this.setState({ userOrganizations }));
  }
  retireMember = (member) => {
    retireMemberFromBoard(this.props.match.params.idBoard, member.id)
      .then(ok => {
        this.props.dispatchRemoveMemberFromBoard(member.id);
        this.setState({ message: `${member.fullName} removed from the board` })
      })
      .catch(error => console.error(error) || this.setState({ message: `Couldn't fired ${member.fullName} from board` }))
  }
  setOwner = (member) => {
    transfertBoardOwnership(this.props.match.params.idBoard, member.id)
      .then(ok => {
        this.props.dispatchSetBoardOwner(member.id, client.getCredentials());
        this.setState({ message: `${member.fullName} is the new board owner` });
      })
      .catch(error => this.setState({ message: `Coudn't transfer ownership to ${member.fullName}` }))
  }
  inviteMember = (event) => {
    event.preventDefault();
    let email = this.mailInput.current.value && this.mailInput.current.value.replace(/(^\s*)|(\s*$)/g, "");
    if (email && !this.props.members.find(member => member.email === email)) {
      // Send to DB
      inviteMemberToBoard(this.props.match.params.idBoard, email)
        .then(member => {
          this.props.dispatchAddMemberToBoard(member);
          this.setState({ message: `${member.fullName} joined the board` });
          this.mailInput.current.value = "";
        })
        .catch(error => this.setState({ message: `${email} wasn't added to the board` }));
      // put in props
    }
  }
  inviteOrganization = (organization) => {
    inviteOrganizationToBoard(this.props.match.params.idBoard, organization.id)
      .then( organization => {
        this.props.dispatchAddOrganization(organization);
        this.setState({ organizationMessage: `${organization.name} joined the board` });
        this.mailInput.current.value = "";
      })
      .catch(error => this.setState({ organizationMessage: `${organization.name} wasn't added to the board` }));
  }
  expulseOrganization = (organization) => {
    expulseOrganizationFromBoard(this.props.match.params.idBoard, organization.id)
      .then(ok => {
        this.props.dispatchRemoveOrganization(organization.id);
        this.setState({ organizationMessage: `${organization.name} removed from the board` })
      })
      .catch(error => console.error(error) || this.setState({ organizationMessage: `Couldn't remove ${organization.name} from board` }))
  }
  render() {
    this.mailInput = React.createRef();
    const {
      isOwner,
      members,
      boardOrganizations
    } = this.props;
    return (
      <div className="BoardMembers">
        <div className="board-member-blocks">
          <h1 className="board-title">Board organizations</h1>
          {boardOrganizations.map(organization => (
            <span key={organization.name}>
              <ListGroupItem>
                {isOwner && (
                  <input
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.expulseOrganization(organization)}
                    value="X"
                  />
                )}
                {organization.name}
              </ListGroupItem>
            </span>
          ))}
          <h1 className="board-title">My Organizations</h1>
          {this.state.userOrganizations.map(organization => (
            <span key={organization.name}>
              <ListGroupItem>
                {isOwner && (
                  <input
                    type="button"
                    className="btn btn-warning btn-sm mr-1"
                    onClick={() => this.inviteOrganization(organization)}
                    value="+"
                    disabled={boardOrganizations.find(boardOrganization => boardOrganization.id === organization.id)}
                  />
                )}
                {organization.name}
              </ListGroupItem>
            </span>
          ))}
        </div>
        <div className="board-member-blocks">
          <h1 className="board-title">Board Members</h1>
          {isOwner && (
            <Form onSubmit={this.inviteMember}>
              <Label className="board-labels" for="newMemberEmail">Add member :</Label>
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
                      <input type="button" className="btn btn-danger btn-sm" onClick={() => this.retireMember(member)} value="X" />
                      <input type="button" className="btn btn-warning btn-sm mr-2" onClick={() => this.setOwner(member)} value="transfer owner" />
                    </span>
                  )}
                  {member.email}
                </ListGroupItem>
              </span>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state, props) => console.log(state.board.organizations) ||({
  isOwner: state.board.idOwner === client.me,
  members: state.board.members,
  boardOrganizations: state.board.organizations,
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddMemberToBoard: (member) => dispatch(addMemberToBoard(member)),
  dispatchRemoveMemberFromBoard: (idMember) => dispatch(removeMemberFromBoard(idMember)),
  dispatchSetBoardOwner: (idMember, exOwner) => dispatch(setBoardOwner(idMember, exOwner)),
  dispatchAddOrganization: (organization) => dispatch(addOrganizationToBoard(organization)),
  dispatchRemoveOrganization: (idOrganization) => dispatch(removeOrganizationFromBoard(idOrganization)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersView); 