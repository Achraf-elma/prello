// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom";
import { Col, Row, Container, Card,ListGroupItem, ListGroup} from "reactstrap";
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
      <Container>
        <div>
          <div className="background" />
          <div>
            {organizationListName}
          </div>
        <Row className="upperBar">
          <Link className="createBoardButton" to={`${match.url}/new`}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp; Create a Team</Link>
          
        </Row>
        <Card className="cardTeam">
           
           <ListGroup>

           {organizations.map((organization) => (
              <ListGroupItem className="teamElementList">
                 <OrganizationCard key={organization.id} organization={organization} />
              </ListGroupItem>
            ))}
              </ListGroup>
        </Card>

            
          <Route
            path={`${match.path}/new`}
            render={(props) => <OrganizationModal {...props} newOrganization={this.newOrganization} />}
          />
        </div>
      </Container>
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