// Modules
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, ButtonGroup, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Action builder


// Components

// Styles
import '../../style/boardList.css';

class BoardList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            boardList: this.props.boardList,
            boardListName: this.props.boardListName,
            owners: this.props.owners
        }
    }
    /*isOwner(){
        let owners = this.state.owners
    }*/
    render(){
        return (
            <div>
                <div className="namelist">
                {this.state.boardListName}
                </div>
                <div className="boardlist">
                    {this.state.boardList.map((board) => (
                        <Link to={`/board/${board.id}`} activeClassName="active">
                            {board.id}
                            <Card key={board.id} className="boards">
                                <CardTitle>{board.name}</CardTitle>
                                <CardSubtitle>Description</CardSubtitle>
                                <CardBody>
                                    <p>{board.description}</p>
                                    <ul>
                                        <li> {board.nbCardsDue} Cards due </li>
                                        <li> {board.nbCardsDone} Cards done </li>
                                        <li> {board.nbCardsExpired} Cards expired </li>
                                    </ul>
                                </CardBody> 
                                <Button>Delete</Button>
                                
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            
        );
    }

}

// Export connected Components
export default (BoardList); 