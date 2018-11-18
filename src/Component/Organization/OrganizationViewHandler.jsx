// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

// Action builder
import { setOrganization } from '../../action/actionOrganization';

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
        .then(organization => this.props.dispatchSetOrganization(organization))
        .catch(err => console.error(err));
    }
  }

  componentDidMount() {
    fetchOrganization(this.props.match.params.idOrganization)
    .then(organization => this.props.dispatchSetOrganization(organization))
    .catch(err => console.error(err));
  }


  render() { 
    const { name, match } = this.props;
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
                <NavLink className="btn btn-primary" to={`${match.url}/members`} >Members</NavLink>
                <NavLink className="btn btn-primary" to={`${match.url}/settings`} >Settings</NavLink>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <Switch>
            <Redirect from={`${match.path}`} exact to={`${match.url}/boards`} />
            <Route path={`${match.path}/boards`} component={OrganizationBoards} />
            <Route path={`${match.path}/members`} component={OrganizationMembers} />
            <Route path={`${match.path}/settings`} component={OrganizationSettings} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  name : state.organization.name
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetOrganization : (organization) => dispatch(setOrganization(organization))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationViewHandler); 