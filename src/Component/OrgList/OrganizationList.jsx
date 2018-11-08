// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, ButtonGroup, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Action builder
import { addOrganizationToOrganizations} from '../../action/actionOrgList';

import '../../style/organization.css';



class OrganizationList extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {
            organizations,
            addOrganizationToOrganizations,
        }
         = this.props;
        return (
            <div>
                <div className="namelist">
                {this.props.organizationListName}
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
                                    <Link to={`/organization/${organization.id}`} activeClassName="active">
                                        <Button>View</Button>
                                    </Link>
                                </ButtonGroup>
                            </Card>
                    ))}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, props) => ({
    organizations: state.organizations
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
      dispatchAddOrganizationToOrganizations : (displayName, desc) => (dispatch(addOrganizationToOrganizations(displayName,desc)))
  })
  

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList); 