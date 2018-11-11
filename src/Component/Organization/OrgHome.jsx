// Modules
import React from 'react';
import { Button } from 'reactstrap';

//Components
import OrganizationList from './OrganizationList';

// Styles
import '../../style/home.css';

const OrgHome = () => (
  <div>
    <div className="teams">
      <Button className="create"> Create a Team</Button>
      <OrganizationList organizationListName="Manage Teams"/>
    </div>
  </div>
);

// Export connected Components
export default OrgHome; 