import React from 'react';
import { NavLink } from "react-router-dom";

const OrganizationCard = ({organization}) => (
  <li>
    <NavLink className="list-group-item" to={`/organizations/${organization.id}`}>
      {organization.name}
    </NavLink>
  </li>
);

export default OrganizationCard;