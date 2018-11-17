import React from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle,
  ButtonGroup, Button,
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const OrganizationCard = ({organization}) => (
  <li>
    <NavLink className="list-group-item" to={`/organizations/${organization.id}/boards`}>
      {organization.name}
    </NavLink>
  </li>
);

export default OrganizationCard;