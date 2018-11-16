// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';


// Action builder
import { setBoard } from '../../action/actionBoard';
import { setLists } from '../../action/actionLists';
import { setCards } from '../../action/actionCards';

// Components
import CalendarView from './CalendarView';
import Board from './Board';

// Requests
import {fetchBoard, fetchBoardLists, fetchBoardCards} from '../../request/board'
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
    ])
    .then(([board, lists, cards]) => [
      this.props.dispatchSetBoard(board),
      this.props.dispatchSetLists(lists),
      this.props.dispatchSetCards(cards),
    ])
    .catch(error => error instanceof ErrorLogin ? this.props.history.push('/login') : Promise.reject(error))
    .catch(error => error instanceof ErrorForbidden ? this.props.history.push('/home') : Promise.reject(error))
    .catch(error => error instanceof ErrorNotFound ? this.props.history.push('/home') : Promise.reject(error))
    .catch(err => this.props.history.push('/login'));
  }

  LinkToCalendar = () => (
    <Link className="btn btn-primary" to={`${this.props.match.url}/calendar`}>Calendar View</Link>
  )
  LinkToBoard = () => (
    <Link className="btn btn-primary" to={`${this.props.match.url}/board`}>Board View</Link>
  )

  render() {
    const { board } = this.props;
    return (
      <div>
        <div className="board-background"/>
        <div className="container">
          <div className="row board-info">
            <div className="col">
              <h1 className="board-title"><i className="fa fa-tasks"></i>{board.name}</h1>
            </div>
            <div className="col">
              <Route path={`${this.props.match.path}/board`} component={this.LinkToCalendar} />
              <Route path={`${this.props.match.path}/calendar`} component={this.LinkToBoard} />
            </div>
          </div>
          <hr className="separator" />
          <Route path={`${this.props.match.path}/board`} component={Board}/>
          <Route path={`${this.props.match.path}/calendar`} component={CalendarView}/>
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
  dispatchSetCards : (cards) => dispatch(setCards(cards))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardViewHandler); 