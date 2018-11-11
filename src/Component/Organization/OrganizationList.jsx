// Modules
import React from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardTitle, CardSubtitle,
  ButtonGroup, Button,
} from 'reactstrap';
import { Link, Route } from "react-router-dom";

// Component
import OrganizationModal from './OrganizationModal';

// Action builder
import { addOrganizationToOrganizations} from '../../action/actionOrgList';

import '../../style/organization.css';

const OrganizationList = ({ organizations, organizationListName, dispatchForm, match }) => (
  <div>
    <div className="teams">
    <div className="background"/>
    <div className="namelist">
      {organizationListName}
    </div>
    <Link className="btn btn-lg" to={`${match.url}/new`}> Create a Team</Link>
    <div className="organizationList">
      {organizations.map((organization) => (
        <Card key={organization.id} className="organizations">
          <CardTitle>{organization.displayName}</CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          <CardBody>
            <p>{organization.desc}</p>
          </CardBody> 
          <ButtonGroup className="buttons">
          <Link to={`/organization/${organization.id}`}>
            <Button>View</Button>
          </Link>
          </ButtonGroup>
        </Card>
      ))}
      
    </div>
      <Route
        path={`${match.path}/new`}
        render={(props)=> console.log("ok") || <OrganizationModal {...props} dispatchForm={dispatchForm}/>}
        />
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  organizations: state.organizations
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchForm: (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('name') !== '') {
      dispatch(addOrganizationToOrganizations(data.get('name'), data.get('description')))
    }
  },
})


// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList); 