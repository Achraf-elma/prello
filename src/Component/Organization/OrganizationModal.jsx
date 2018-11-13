// Modules
import React from 'react';
import {
  ButtonGroup, Button,
  Modal, ModalBody, ModalHeader,
  Form, FormGroup, Label, Input,
} from 'reactstrap';


const OrganizationModal = ({dispatchForm , history}) => (
  <Modal isOpen={true} toggle={(e) => history.goBack()} >
    <ModalHeader toggle={(e) => history.goBack()}>New team settings</ModalHeader>
    <ModalBody>
      <Form onSubmit={(e) => { dispatchForm(e); history.goBack(); }} >
        <FormGroup>
          <Label for="newDisplayName">Name</Label>
          <Input type="text" name="name" id="newDisplayName" placeholder={"Enter your team name"} />
        </FormGroup>
        <FormGroup>
          <Label for="newDesc">Description</Label>
          <Input type="text" name="description" id="newDesc" placeholder={"Enter your team description"} />
        </FormGroup>
        <ButtonGroup>
          <Button color="success" className="submit" type="submit" active>Create Team</Button>
          <Button color="secondary" onClick={(e) => history.goBack()}>Cancel</Button>
        </ButtonGroup>
      </Form>
    </ModalBody>
  </Modal>
);

export default OrganizationModal;