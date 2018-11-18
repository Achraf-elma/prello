// Modules
import React from 'react';
import { connect } from 'react-redux';
import{Card , CardHeader,  CardBody, Modal, ModalHeader, ModalBody, Popover, PopoverHeader, PopoverBody, ButtonDropdown,DropdownMenu,DropdownItem, DropdownToggle} from 'reactstrap';


// Action builder
import { setListName, setListClosed, moveCardInList, addCardToList} from '../../../action/actionList';


// Components
import MyCard from '../MyCard/MyCard';
import CardCreator from './CardCreator';
import InputText from '../../Input/InputText';

// Style 
import '../../../style/App.css';
import '../../../style/list.css';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editNameOn : false,
      popoverOpen: false,
      dropdownOpen : false
    };
}

  handleEditClick = () => {
    this.setState({
      editNameOn: !this.state.editNameOn
    });
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  togglePopoverEdit = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

   handleDeleteList = () => {
    var r = window.confirm("Archive this list ?");
    if (r === true) {
        this.props.dispatchSetListClosed();
    } 
  }

 

  render() {
  const {
      idList,
      list,
      name,
      cards,
      dispatchSetListName
  } = this.props;
  return (
    <Card className="list">
      <CardHeader>
              

      {this.state.editNameOn === true ? 
         <span className="ListCreator">
          <InputText
          className="changeName"
            value={name}
            placeHolder="List Name"
            resetable
            onChange={(value) => {
              dispatchSetListName(value);
              this.handleEditClick(); 
              
            }}
          />
         </span>
      :
        <span onClick={this.handleEditClick} className="list-title">{list.name}</span>
      }
      
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.togglePopoverEdit}>
                  <DropdownToggle className="dropdw">  <i  className= { this.state.editNameOn === true ? "fa fa-ellipsis-v editmod" : "fa fa-ellipsis-v" } >
                  </i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick = {this.handleEditClick} >Name</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem  onClick = {this.handleDeleteList} >Delete</DropdownItem>
                  </DropdownMenu>
            </ButtonDropdown>
    
      </CardHeader>

      {cards.map((card) => (
        <MyCard key={card.id} idList={card.idList} id={card.id}></MyCard>
      ))}
            
      <CardBody>
        <div>
           {/* <Link to={`${url}/list/`{$idList}`/add`} className="add-card-link" ></div>  */}
                {/* <span className="fa fa-plus-circle">Add Card</span>  
            </Link> */}
            <button onClick={this.togglePopover} className="add-card-link"> <span className="fa fa-plus-circle">Add Card</span> </button>
          <CardCreator isOpen={this.state.popoverOpen} toggle={this.togglePopover} handleSubmit={this.addingCard} idList={list.idList} idBoard={list.idBoard}/>
        </div>
      </CardBody>

      </Card>
    
    );
  }
}
 
const mapStateToProps = ( state, props ) => ({
  list : state.lists.find(list => list.idList === props.idList),
  cards: state.cards.filter(card => card.idList === props.idList && card.isClosed !== true)
});

const mapDispatchToProps = ( dispatch, props ) => {
  return {
    dispatchOnDragEnd: ({source, destination}) => (
      destination &&
      dispatch(moveCardInList(source.index, destination.index))
    ),
    dispatchSetListName: (name) => dispatch(setListName( props.idList, name )),
    dispatchSetListClosed: () => dispatch(setListClosed( props.idList, true )),
    dispatchAddCardToList: (idlist, idboard, name, duedate) => dispatch(addCardToList(idlist, idboard, name, duedate, false,false)
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List); 