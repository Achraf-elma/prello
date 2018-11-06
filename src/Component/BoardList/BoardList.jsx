// Modules
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

// Action builder


// Components

// Styles
import '../../style/boardList.css';

class BoardList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            boardList: this.props.boardList,
            boardListName: this.props.boardListName
        }
      }
    render(){
        return (
            <div>
                <div className="namelist">
                {this.state.boardListName}
                </div>
                <div className="boardlist">
                    {this.state.boardList.map((board) => (
                        <Card key={board.id} className="boards">
                            <CardTitle>{board.name}</CardTitle>
                            <CardSubtitle>Description</CardSubtitle>
                            <CardBody>
                                <p>{board.description}</p>
                                {board.nbCardsDue} Cards due
                                {board.nbCardsDone} Cards done
                                {board.nbCardsExpired} Cards expired
                            </CardBody>   
                        </Card>
                    ))}
                </div>
            </div>
            
        );
    }

}

// Export connected Components
export default (BoardList); 