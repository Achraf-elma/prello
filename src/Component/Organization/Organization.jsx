// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, ButtonGroup, Button, Row, Col, Container} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Action builder
import { addNewBoardId, removeBoardId } from '../../action/actionOrganization';

// Components
//import  from './'

import BoardCard from '../Home/BoardCard'
import '../../style/home.css';

const Organization = ({
  displayName,
  boards,
  dispatchRemoveBoardId
}) => (
  <div className="Organization">
    <Container>
      <Row>
        {boards.map((board) => (
          <BoardCard key={board.boardId} closeBoard = {dispatchRemoveBoardId} board = {board}/>
))}
  ))}
      </Row>
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