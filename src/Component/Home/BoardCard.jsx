import React from 'react';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, CardHeader, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, ButtonGroup, Button, Modal, ModalBody,  Row, Col, Container} from 'reactstrap';
// Styles
import '../../style/home.css';

const BoardCard = ({
    board,
    closeBoard
}) => (
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
    <Link to={`/board/${board.id}`} activeClassName="active">
    <button className="buttonCustom">View</button>
    </Link>
        <button className="delete" onClick ={() => closeBoard(board.id, true)} >Delete</button>
    </ButtonGroup>
    </Card>
    </Col>
)

export default BoardCard;