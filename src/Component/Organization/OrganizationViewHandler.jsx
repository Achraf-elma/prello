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

import OrganizationBoards from './OrganizationBoards';
import OrganizationSettings from './OrganizationSettings';
import OrganizationMembers from './OrganizationMembers';


class OrganizationViewHandler extends React.Component{

  componentDidUpdate(previousProps) {
    if( previousProps.match.params.idOrganization !== this.props.match.params.idOrganization ){
      fetchOrganization(this.props.match.params.idOrganization)
        .then(organization => this.props.dispatchSetTeam(organization))
        .catch(err => console.error(err));
    }
  }

  componentDidMount() {
    fetchOrganization(this.props.match.params.idOrganization)
    .then(organization => this.props.dispatchSetTeam(organization))
    .catch(err => console.error(err));
  }


  render() { 
    const { name, match } = this.props
    return (
      <div>
        <div className="organization-background" />
        <div className="container">
          <div className="row organization-info">
            <div className="col">
              <h1 className="organization-title">{name}</h1>
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
          <Route path={`${match.path}/(board|)`} component={OrganizationBoards} />
          <Route path={`${match.path}/boards`} component={OrganizationBoards} />
          <Route path={`${match.path}/settings`} component={OrganizationSettings} />
          <Route path={`${match.path}/members`} component={OrganizationMembers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  name : state.organization.name
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetTeam : (organization) => dispatch(setTeam(organization))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationViewHandler); 