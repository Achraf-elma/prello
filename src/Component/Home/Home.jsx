// Modules
import React from 'react';
import {connect} from 'react-redux';
import { Modal, ModalBody,  Row, Col, Container} from 'reactstrap';
import BoardCreator from '../BoardList/BoardCreator';

// Action builder
import { addBoardToBoards} from '../../action/actionBoardList';
import { setBoardClose } from '../../action/actionBoard';

// Components
import BoardList from '../BoardList/BoardList';

// Styles
import '../../style/App.css';
import '../../style/home.css';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  filterRecent = (boards) => (boards)
  toggle = () => this.setState({ modal: !this.state.modal });
  toggleModal = () => this.setState({ modal: !this.state.modal });
  addingBoard(event){
    this.props.dispatchAddBoardToBoards(event);
    this.toggleModal();
  }
  render() {
    return (
      <div>
        <div className="background"/>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <BoardCreator closeToogle={this.toggleModal}  handleSubmit={this.addingBoard.bind(this)}></BoardCreator>
          </ModalBody>
        </Modal>
        <Container className="boardlistHeader">
          <Row>
            <Col>
              <button className="createBoardButton" onClick={this.toggle}>Create a Board</button>
            </Col>
          </Row>
        </Container>
        <BoardList
          boardListTitle="Recently Opened"
          boardFilter={this.filterRecent}
        />
      </div>
    );
  }
}

// Export connected Components
const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
  dispatchCloseBoardFromBoards: (idBoardToRemove, closed) => dispatch(setBoardClose(idBoardToRemove, closed)),
  dispatchAddBoardToBoards: (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch( addBoardToBoards(
      data.get('name'),
      data.get('desc'),
      data.get('isPublic') === "true",
      data.get('members'),
      data.get('owners'))
    );
  }
});
// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Home); 