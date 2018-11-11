// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Container} from 'reactstrap';

// Action builder
import { addNewBoardId, removeBoardId } from '../../action/actionOrganization';

// Components
//import  from './'

import BoardList from '../BoardList/BoardList';
import '../../style/home.css';

const Organization = ({
  displayName,
  boards,
  dispatchRemoveBoardId
}) => (
  <div className="Organization">
  <Container>
    <BoardList
    boardListTitle="Organization boards"
    boardFilter={(a) => a}
    />
  </Container>
  </div>
);

const mapStateToProps = (state, props) => ({
  displayName: state.organization.displayName,
  boards: state.organization.boards
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchAddNewBoardId: (boardId) => dispatch(addNewBoardId(props.id, boardId)),
  dispatchRemoveBoardId: (boardId) => dispatch(removeBoardId(props.id, boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Organization); 