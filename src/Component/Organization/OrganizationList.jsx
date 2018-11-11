// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, ButtonGroup, Button} from 'reactstrap';
import { Link } from "react-router-dom";
// Action builder
import { addOrganizationToOrganizations} from '../../action/actionOrgList';

import '../../style/organization.css';

const OrganizationList = ({ organizations, organizationListName, addOrganizationToOrganizations }) => (
  <div>
    <div className="namelist">
      {organizationListName}
    </div>
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
  </div>
);

const mapStateToProps = (state, props) => ({
  organizations: state.organizations
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddOrganizationToOrganizations : (displayName, desc) => (dispatch(addOrganizationToOrganizations(displayName,desc)))
})


// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList); 