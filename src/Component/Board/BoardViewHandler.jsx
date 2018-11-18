// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';


// Action builder
import { setBoard } from '../../action/actionBoard';
import { setLists } from '../../action/actionLists';
import { setCards } from '../../action/actionCards';
import { setLabels } from '../../action/actionLabel';


// Components
import CalendarView from './CalendarView';
import Board from './Board';
import MembersView from './MembersView';

// Requests
import {fetchBoard, fetchBoardLists, fetchBoardCards, fetchBoardLabels} from '../../request/board'
import { ErrorLogin, ErrorForbidden, ErrorNotFound } from '../../request/requestErrors';

// Styles
import '../../style/board.css';

class BoardViewHandler extends React.Component{

  constructor(props) {
    super(props);
    this.state = { mountedMatch: this.props.match }
  }

  componentDidMount() {
    this.setState({ mountedMatch: this.props.match })
    let idBoard =this.props.match.params.idBoard
    Promise.all([
      fetchBoard(idBoard),
      fetchBoardLists(idBoard),
      fetchBoardCards(idBoard),
      fetchBoardLabels(idBoard),

    ])
    .then(([board, lists, cards, labels]) => [
      this.props.dispatchSetBoard(board),
      this.props.dispatchSetLists(lists),
      this.props.dispatchSetCards(cards),
      this.props.dispatchSetLabels(labels),

    ])
    .catch(error => error instanceof ErrorLogin ? this.props.history.push('/login') : Promise.reject(error))
    .catch(error => error instanceof ErrorForbidden ? this.props.history.push('/home') : Promise.reject(error))
    .catch(error => error instanceof ErrorNotFound ? this.props.history.push('/home') : Promise.reject(error))
    .catch(error => console.error(error) || this.props.history.push('/login'));
  }

  render() {
    const { board } = this.props;
    return (
      <div>
        <div className="board-background"/>
        <div className="container full-width">
          <div className="row board-info">
            <div className="col">
              <h1 className="board-title"><i className="fa fa-tasks"></i>{board.name}</h1>
            </div>
            <div className="col">
              <NavLink className="btn btn-primary" to={`${this.props.match.url}/board`}>Board View</NavLink>
              <NavLink className="btn btn-primary" to={`${this.props.match.url}/calendar`}>Calendar View</NavLink>
              <NavLink className="btn btn-primary" to={`${this.props.match.url}/members`}>Members View</NavLink>
            </div>
          </div>
          <hr className="separator" />
          <Route path={`${this.props.match.path}/board`} component={Board}/>
          <Route path={`${this.props.match.path}/calendar`} component={CalendarView}/>
          <Route path={`${this.props.match.path}/members`} component={MembersView} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  board: state.board
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetBoard : (board) => dispatch(setBoard(board)),
  dispatchSetLists : (lists) => dispatch(setLists(lists)),
  dispatchSetCards : (cards) => dispatch(setCards(cards)), 
  dispatchSetLabels : (labels) => dispatch(setLabels(labels))

});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardViewHandler); 