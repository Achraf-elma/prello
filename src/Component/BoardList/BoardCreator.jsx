// Modules
import React from 'react';
import { Modal, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// Components

import '../../style/home.css';

const BoardCreator = ({ handleSubmit, history}) => (
  <Modal isOpen={true} toggle={() => history.goBack()}>
    <ModalBody>
      <Form  onSubmit={(e)=> {handleSubmit(e); history.goBack()}}>
        <span className="boardCreator">
          <FormGroup>
            <Label for="boarddName">Board Name</Label>
            <Input type="text" name="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="boarddName">Board description</Label>
            <Input type="text" name="desc"/>
          </FormGroup>
          <FormGroup>
            <Label for="isPublic"> Privacy </Label>
            <Input type="select" name="isPublic">
            <option value={false}>Private</option>
            <option value={true}>Public</option>
            </Input>
          </FormGroup>
        </span>
        <div className="buttons">
          <Button className="submit" type="submit" >Create</Button>
        </div>
      </Form>
    </ModalBody>
  </Modal>
);

export default BoardCreator; 