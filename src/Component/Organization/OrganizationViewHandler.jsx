// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col , Button, ButtonGroup} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { setTeam } from '../../action/actionOrganization';

// Components

import Board from '../Board/Board';

// Requests
import {fetchOrganization, fetchOrganizationBoards, fetchOrganizationMembers} from '../../request/organization'

// Styles
import '../../style/organization.css';

import Organization from './Organization';
import OrgSettings from './OrgSettingsView';
import OrgMembers from './OrgMembersView';


class OrganizationViewHandler extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        ViewChosen : 'Boards',
        organizationId: this.props.match.params.organizationId
      }
      this.setViewChosen = this.setViewChosen.bind(this)
    }

    componentDidMount() {
        fetchOrganization(this.state.organizationId)
          .then(organization => {
            this.props.dispatchSetTeam(organization)
           })
          .catch(err => console.error(err));
        }

    setViewChosen = (ViewChosen) =>  {
      this.setState({
          ViewChosen: ViewChosen
      })
    }

    renderSwitch(ViewChosen) {
        switch(ViewChosen) {
          case 'Boards':
            return <Organization/>;
          case 'Settings':
            return <OrgSettings/>;
          case 'Members':
            return <OrgMembers/>;
          default:
            return <OrgMembers/>;
        }
      }
      


    render() { 
      const { displayName} = this.props
      
    return (
        <div>
            <div className="organization-background"/>
            <div className="container">
                <div className="row organization-info">
                    <div className="col">
                        <h1 className="organization-title">{displayName}</h1>
                    </div>

                    <div className="viewSelection">
                        <div className="col">
                            <Button color="primary" onClick={() => this.setViewChosen('Boards')} active={this.state.ViewChosen !== 'Boards'}>Boards</Button>
                            <Button color="primary" onClick={() => this.setViewChosen('Members')} active={this.state.ViewChosen !== 'Members'}>Members</Button>
                            <Button color="primary" onClick={() => this.setViewChosen('Settings')} active={this.state.ViewChosen !== 'Settings'}>Settings</Button>
                        </div>
                    </div>
                </div>
                <hr className="separator" />

                {this.renderSwitch(this.state.ViewChosen)}
            </div>
        </div>
      );
    }


}

const mapStateToProps = ( state, props ) => ({
    displayName : state.organization.displayName
})

const mapDispatchToProps = (dispatch, props) => ({
    dispatchSetTeam : (organization) => dispatch(setTeam(organization))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationViewHandler); 