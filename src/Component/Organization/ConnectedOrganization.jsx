// Module
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";

// Component
import OrgHome from './OrgHome';
import OrganizationViewHandler from './OrganizationViewHandler';

// Store
import store from '../../organizationStore';

const ConnectedOrganization = (props) => (
  <Provider store={store}>
    <div>
      <Route path='/organization' component={OrgHome} />
      <Route path='/organization/:organizationId' component={OrganizationViewHandler} />
    </div>
  </Provider>
);

export default ConnectedOrganization;