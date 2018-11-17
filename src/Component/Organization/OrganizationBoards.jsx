// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

// Action builder
import { addNewBoardId, removeBoardId } from '../../action/actionOrganization';

// Components

import BoardList from '../BoardList/BoardList';
import '../../style/home.css';

const Organization = ({
  match,

}) => (
  <div className="Organization">
    <Container>
    <BoardList boardListTitle={
      <Link className="btn btn-lg btn-primary" to={`${match.url}/addBoard`}> Create board </Link>
      }/>
    </Container>
    {/* <Route  */}
  </div>
);

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddNewBoardId: (boardId) => dispatch(addNewBoardId(props.id, boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Organization); 