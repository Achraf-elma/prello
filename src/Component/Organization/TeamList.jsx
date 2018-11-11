// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';

// Action builder
import { createTeam} from '../../action/actionTeamList';


// Components
import WIP from './../../Component/WIP';

// Styles
import '../../style/team.css';

class TeamList extends React.Component{

  constructor(props) {
    super(props);
  }

    render() { 
        const {
            listTeam,
        }
        = this.props;
    return (
        <div className="team">
            <ListGroup>
                {listTeam.map((team) => (
                    <ListGroupItem>{team.name}</ListGroupItem>
                ))}
            </ListGroup>
            <Button>+ Create a team</Button>
        </div>
    );
    }
}

// Export connected Components
export default (TeamList); 