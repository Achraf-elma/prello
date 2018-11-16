// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container} from 'reactstrap';

// Action builder
import { setBoardClose} from '../../action/actionBoard';

// Styles
import '../../style/boardList.css';
import BoardCard from './BoardCard';

const BoardList = ({
  boardListTitle,
  boards,
  boardFilter = (b)=> b,
  dispatchCloseBoardFromBoards,
}) => console.log(boards, boardFilter) || (
  <div>
    <Container>
      <Row>
        <Col>
              <h1 className="loginTitle"><i className="fa fa-tasks"></i>{boardListTitle}</h1>
        </Col>
      </Row>
      <hr className="separator" />
      <Row>
        {boardFilter(boards).map((board) => (
          <BoardCard
            key={board.id}
            board={board}
            closeBoard={dispatchCloseBoardFromBoards}
            />
        ))}
      </Row>
    </Container>
  </div>
);

const mapStateToProps = (state, props) => ({
  boards: state.boards.filter(board => !board.isClosed),
  owners: state.boardListName,
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchCloseBoardFromBoards: (idBoardToRemove, closed) => dispatch(setBoardClose(idBoardToRemove, closed))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(BoardList); 