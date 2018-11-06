// Modules
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder



// Components
import BoardList from '../BoardList/BoardList';
//import TeamList from './../../Component/TeamList';
//import BoardForm from './../../Component/BoardForm';
//import TeamForm from './../../Component/TeamForm';

// Styles
import '../../style/home.css';

class Home extends React.Component{

  constructor(props) {
    super(props);
  }

    render() { 
        return (
            <div>
            <div className="boards">
                <BoardList boardListName="Recently Opened" boardList={[
                                                                        {
                                                                            id: "5612e4f91b25c15e873722b8",
                                                                            name: "Recently Opened Board 1",
                                                                            desc: " first Board 1",
                                                                            nbCardsDue: 2,
                                                                            nbCardsDone: 2,
                                                                            nbCardsExpired: 4
                                                                        },
                                                                        {
                                                                            id: "5612e4f91b25c15e873722b8",
                                                                            name: "Recently Opened Board 2",
                                                                            desc: " first board 2",
                                                                            nbCardsDue: 2,
                                                                            nbCardsDone: 2,
                                                                            nbCardsExpired: 4
                                                                        }
                                                                        ]}>
                </BoardList>
                <BoardList boardListName="All boards" boardList={[
                                                                        {
                                                                            id: "5612e4f91b25c15e873722b8",
                                                                            name: "Recently Opened Board 1",
                                                                            desc: " first Board 1",
                                                                            nbCardsDue: 2,
                                                                            nbCardsDone: 2,
                                                                            nbCardsExpired: 4
                                                                        },
                                                                        {
                                                                            id: "5612e4f91b25c15e873722b8",
                                                                            name: "Recently Opened Board 2",
                                                                            desc: " first board 2",
                                                                            nbCardsDue: 2,
                                                                            nbCardsDone: 2,
                                                                            nbCardsExpired: 4
                                                                        }
                                                                        ]}>
                </BoardList>
                <Button> Create a </Button>
            </div>
                <div className="teams">
                holé
                </div>
            </div>
            
            
    
        );
    }
}

// Export connected Components
export default (Home); 