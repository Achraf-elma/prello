// Modules
import React from 'react';
import { Link } from "react-router-dom";
import {
    Card, CardHeader, CardBody, CardTitle, CardSubtitle,
    ButtonGroup, Col
    } from 'reactstrap';
// Styles
import '../../style/home.css';

const BoardCard = ({ board, closeBoard }) => (
  <Col>
    <Card key={board.id} className="myboard">
      <CardHeader>
        <CardTitle>{board.name}</CardTitle>
        <CardSubtitle>Description</CardSubtitle>
      </CardHeader>
      <CardBody>
        <p>{board.description}</p>
        <ul>
          <li> {board.nbCardsDue} Cards due </li>
          <li> {board.nbCardsDone} Cards done </li>
          <li> {board.nbCardsExpired} Cards expired </li>
        </ul>
      </CardBody> 
      <ButtonGroup className="buttons">
        <Link to={`/board/${board.id}/board`}>
        <button className="buttonCustom">View</button>
        </Link>
        <button className="delete" onClick ={() => closeBoard(board.id, true)} >Delete</button>
      </ButtonGroup>
    </Card>
  </Col>
)

export default BoardCard;