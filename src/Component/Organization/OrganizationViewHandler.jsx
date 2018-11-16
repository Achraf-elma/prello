// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

// Action builder
import { setTeam } from '../../action/actionOrganization';

// Requests
import {fetchOrganization} from '../../request/organization'

// Styles
import '../../style/organization.css';

import Organization from './Organization';
import OrgSettings from './OrgSettingsView';
import OrgMembers from './OrgMembersView';


class OrganizationViewHandler extends React.Component{

  componentDidMount() {
    fetchOrganization(this.props.match.params.organizationId)
    .then(organization => this.props.dispatchSetTeam(organization))
    .catch(err => console.error(err));
  }


  render() { 
    const { displayName, match, history } = this.props
    return (
      <div>
        <div className="organization-background" />
        <div className="container">
          <div className="row organization-info">
            <div className="col">
              <h1 className="organization-title">{displayName}</h1>
            </div>

            <div className="viewSelection">
              <div className="col">
                <NavLink className="btn btn-primary" to={`${match.url}/boards`} >Boards</NavLink>
                <NavLink className="btn btn-primary" to={`${match.url}/settings`} >Members</NavLink>
                <NavLink className="btn btn-primary" to={`${match.url}/members`} >Settings</NavLink>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <Route path={`${match.path}/boards`} component={Organization} />
          <Route path={`${match.path}/settings`} component={OrgSettings} />
          <Route path={`${match.path}/members`} component={OrgMembers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  displayName : state.organization.displayName
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetTeam : (organization) => dispatch(setTeam(organization))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationViewHandler); 