// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';

// Action builder
import { setOrganizationSettings } from '../../action/actionOrganization';
import { quitOrganization } from '../../action/actionOrgList';


// Styles
import '../../style/organization.css';
import { updateOrganizationSettings, removeOrganization, fireMemberFromOrganization } from '../../request/organization';

class OrganizationSettings extends React.Component {
  
  saveSettings = (event) => {
    event.preventDefault();
    let name = this.nameInput.current.value && this.nameInput.current.value.replace(/(^\s*)|(\s*$)/g, "");
    let website = this.websiteInput.current.value && this.websiteInput.current.value.replace(/(^\s*)|(\s*$)/g, "");
    let desc = this.descInput.current.value && this.descInput.current.value.replace(/(^\s*)|(\s*$)/g, "");
    console.log("coucou",name);
    if( name && (
      name !== this.props.name ||
      website !== this.props.website ||
      desc !== this.props.desc
    )) {
      updateOrganizationSettings(this.props.match.params.idOrganization, name, website, desc)
        .then(ok => this.props.dispatchSetOrganizationSettings(name, website, desc))
        .catch( error => console.error(error));
    }
  }

  disbandOrganization = () => {
    removeOrganization(this.props.match.params.idOrganization)
      .then(ok => {
        this.props.dispatchQuitOrganization();
        this.props.history.push('/organizations');
      })
      .catch(error => console.error(error));
  }

  quitOrganization = () => {
    fireMemberFromOrganization(this.props.match.params.idOrganization)
      .then(ok => {
        this.props.dispatchQuitOrganization();
        this.props.history.push('/organizations');
      })
      .catch(error => console.error(error));
  }

  render() {
    this.nameInput = React.createRef();
    this.websiteInput = React.createRef();
    this.descInput = React.createRef();
    const {
      name,
      isOwner,
      desc,
      website,
    } = this.props;
    return (
      <div className="OrganizationSettings">
        <form className="organization-labels" onSubmit={this.saveSettings}>
          <Label for="newDisplayName">Name</Label>
          <input className="form-control" ref={this.nameInput} type="text" name="name" defaultValue={name} readOnly={!isOwner} required/>
          <Label for="newWebsite">Website</Label>
          <input className="form-control" ref={this.websiteInput} type="text" name="website" defaultValue={website} readOnly={!isOwner} />
          <Label for="newDesc">Description</Label>
          <input className="form-control descSettings" ref={this.descInput} type="textarea" name="description" defaultValue={desc} readOnly={!isOwner} />
          { isOwner && (<input type="submit" className="btn btn-lg btn-success" value="Save Changes" />)}
          { isOwner && (<input type="button" className="btn btn-lg btn-danger" onClick={this.disbandOrganization} value="Disband organization" />)}
          { isOwner || (<input type="button" className="btn btn-lg btn-danger" onClick={this.quitOrganization} value="Quit organization" />)}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  name: state.organization.name,
  website: state.organization.website,
  desc: state.organization.desc,
  isOwner: state.organization.isOwner,
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchQuitOrganization: () => dispatch(quitOrganization(props.match.params.idOrganization)),
  dispatchSetOrganizationSettings: (name, website, desc) => dispatch(setOrganizationSettings(name, website, desc))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSettings); 