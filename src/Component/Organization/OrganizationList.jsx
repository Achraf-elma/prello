// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom";

// Component
import OrganizationModal from './OrganizationModal';
import OrganizationCard from './OrganizationCard';

// Action builder
import { addOrganizationToOrganizations, setOrganizations} from '../../action/actionOrgList';

import '../../style/organization.css';
import { fetchUserOrganizations } from '../../request/user';
import { createOrganization } from '../../request/organization';

class OrganizationList extends React.Component{
  componentDidMount() {
    fetchUserOrganizations()
      .then(organizations => this.props.dispatchSetOrganizations( organizations ))
      .catch( error => console.error(error) || this.props.history.push("/home"));
  }
  newOrganization = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('name') !== '') {
      let organization = { name: data.get('name'), desc: data.get('description'),};
      createOrganization(organization)
      .then( organization => this.props.dispatchAddOrganization( organization ))
      .catch( error => console.error(error));
    }
  }

  render(){
    const {
      organizations,
      organizationListName,
      match
    } = this.props
    return (
      <div>
        <div className="teams">
          <div className="background" />
          <div className="namelist">
            {organizationListName}
          </div>
          <Link className="btn btn-lg btn-primary" to={`${match.url}/new`}> Create a Team</Link>
          <ul className="organizationList list-group">
            {organizations.map((organization) => (
              <OrganizationCard key={organization.id} organization={organization} />
            ))}
          </ul>
          <Route
            path={`${match.path}/new`}
            render={(props) => <OrganizationModal {...props} newOrganization={this.newOrganization} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  organizations: state.organizations
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetOrganizations:(organizations) => dispatch( setOrganizations( organizations )),
  dispatchAddOrganization: (organization) => dispatch(addOrganizationToOrganizations(organization)),
})


// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList); 