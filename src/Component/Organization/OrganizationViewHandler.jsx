// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col , Button, ButtonGroup} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Components

import Board from '../Board/Board';

// Styles
import '../../style/organization.css';
import Organization from './Organization';
import OrgSettings from './OrgSettingsView';

import OrgMembers from './OrgMembersView';


class OrganizationViewHandler extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        ViewChosen : 'Boards'
      }
      this.setViewChosen = this.setViewChosen.bind(this)
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
          case 'Calendar':
            return <Organization/>;//To change when calendar more advanced
          case 'Settings':
            return <OrgSettings/>;
          case 'Members':
            return <OrgMembers/>;
          default:
            return <Organization/>;
        }
      }
      


    render() { 
      const { viewChosen = 'Boards', displayName} = this.props
      
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
                            <Button color="primary" onClick={() => this.setViewChosen('Calendar')} active={this.state.ViewChosen !== 'Calendar'}>Calendar</Button>
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

});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationViewHandler); 