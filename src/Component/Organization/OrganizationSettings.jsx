// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// Action builder
import { setTeamDisplayName, setTeamDesc, setTeamWebsite } from '../../action/actionOrganization';


// Styles
import '../../style/organization.css';

class OrganizationSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {
      displayName,
      website,
      desc,
      dispatchForm
    } = this.props;
  return (
    <div className="OrganizationSettings">
      <div className="organization-labels">
      <Label for="newDisplayName">Name</Label>
      <Input type = "text" name ="name" id="newDisplayName" value={displayName} disabled/>
      <Label for="newWebsite">Website</Label>
      <Input type = "text" name ="website" id="newWebsite" value={website} disabled/>
      <Label for="newDesc">Description</Label>
      <Input type = "text" name ="description" id ="newDesc" value={desc} disabled/>

      <Button color="success" onClick ={this.toggle} active>Change settings</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Change team settings</ModalHeader>
          <ModalBody>
            <Form onSubmit = {dispatchForm}>
            <FormGroup>
              <Label for="newDisplayName">Name</Label>
              <Input type = "text" name ="name" id="newDisplayName" placeholder={displayName}/>
            </FormGroup>
            <FormGroup>
              <Label for="newWebsite">Website</Label>
              <Input type = "text" name ="website" id="newWebsite" placeholder={website}/>
            </FormGroup>
            <FormGroup>
              <Label for="newDesc">Description</Label>
              <Input type = "text" name ="description" id ="newDesc" placeholder={desc}/>
            </FormGroup>
            <ButtonGroup>
              <Button color="success" className="submit" type="submit" onClick={this.toggle} active>Submit</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ButtonGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
  }
}




  
  const mapStateToProps = (state, props) => ({
    name: state.organization.name,
    displayName: state.organization.displayName,
    website: state.organization.website,
    desc: state.organization.desc
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
      dispatchForm : (event) => {
        // event.preventDefault();
        // const data = new FormData(event.target);
        // if (data.get('name') !== '') {
        //     dispatch(setTeamDisplayName(props.id, data.get('name')))
        // }
        // if (data.get('description') !== '') {dispatch(setTeamDesc(props.id, data.get('description')))}
        // if (data.get('website') !== '') {dispatch(setTeamWebsite(props.id, data.get('website')))}
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSettings); 