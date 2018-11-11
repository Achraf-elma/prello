// Module
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";

// Component
import OrganizationList from './OrganizationList';
import OrganizationViewHandler from './OrganizationViewHandler';

// Store
import store from '../../organizationStore';

const ConnectedOrganization = (props) => (
  <Provider store={store}>
    <div>
      <Route path='/organizations' component={OrganizationList} />
      <Route path='/organization/:organizationId' component={OrganizationViewHandler} />
    </div>
  </Provider>
);

export default ConnectedOrganization;