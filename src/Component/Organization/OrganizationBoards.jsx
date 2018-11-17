// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ObjectId } from 'bson';

// Action builder
import { addBoardToBoards, setBoardList } from '../../action/actionBoardList';

// Components
import BoardCreator from '../BoardList/BoardCreator';
import BoardList from '../BoardList/BoardList';

import { fetchOrganizationBoards } from '../../request/organization';
import { addOrganizationToBoard } from '../../request/board';
import { createBoard } from '../../request/board';
import '../../style/home.css';

class OrganizationBoards extends React.Component {

  componentDidMount(){
    fetchOrganizationBoards(this.props.match.params.idOrganization)
    .then(boards => this.props.dispatchSetBoardList(boards))
    .catch( error => console.error(error)||this.props.history.push("/organizations"));
  }
  componentDidUpdate(previousProps){
    if (previousProps.match.params.idOrganization !== this.props.match.params.idOrganization) {
      fetchOrganizationBoards(this.props.match.params.idOrganization)
        .then(boards => this.props.dispatchSetBoardList(boards))
        .catch(error => console.error(error) || this.props.history.push("/organizations"));
    }
  }

  addingBoard = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get("name")) {
      let newBoard = {
        id: new ObjectId(),
        name: data.get('name'),
        desc: data.get('desc'),
        isPublic: data.get('isPublic') === "true",
        members: data.get('members'),
      };
      createBoard(newBoard)
      .then(board => {
        this.props.dispatchAddBoardToBoards(board);
        return addOrganizationToBoard(board.id, this.props.match.params.idOrganization);
      })
        .catch(error => console.error(error))
    }
  }
  render() {
    const {
      match,
    } = this.props;
    return (
      <div className="Organization">
        <Container>
          <BoardList boardListTitle={
            <Link
              className="btn btn-lg btn-primary"
              to={`${match.url}/addBoard`}>
              Create board
        </Link>
          } />
        </Container>
        <Route path={`${match.path}/addBoard`}
          render={(props) => (<BoardCreator {...props} handleSubmit={this.addingBoard} />)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddBoardToBoards: (board) => dispatch(addBoardToBoards(board)),
  dispatchSetBoardList: (boards) => dispatch(setBoardList(boards)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationBoards); 