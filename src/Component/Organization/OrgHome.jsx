// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { Container, Row, Col , Button, ButtonGroup} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//Components

import OrganizationList from '../OrgList/OrganizationList';

// Styles
import '../../style/home.css';

class OrgHome extends React.Component{
    constructor(props) {
        super(props);
      }
    
        render() { 
            const {
                organizations, 
                addOrganizationToOrganizations
            }
             = this.props;
    
            return (
                <div>
                    <div className="teams">
                        <Button className="create"> Create a Team</Button>
                        <OrganizationList organizationListName="Manage Teams"/>
                    </div>
                </div>
                
            );
        }


}



// Export connected Components
export default (OrgHome); 