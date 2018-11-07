// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';
import { Button, Form, FormGroup, Modal, Label, Input, ModalBody, FormText, ButtonGroup } from 'reactstrap';

 import '../../style/home.css';
const BoardCreator = ({
  handleSubmit,
  modal,
  toggle,
  closeModal  
}) => (
      <Form  onSubmit = {handleSubmit}>
        <span className="ListCreator">
        <FormGroup>
          <Label for="boarddName">Board Name</Label>
          <Input type="text" name="name"/>
        </FormGroup>
        <FormGroup>
          <Label for="boarddName">Board description</Label>
          <Input type="text" name="desc"/>
        </FormGroup>
        <FormGroup>
          <Label for="privacy"> Privacy </Label>
          <Input type="select" name="privacy">
            <option>Private</option>
            <option>Public</option>
          </Input>
      </FormGroup>
      <FormGroup>
          <Label for="boarddName">Members</Label>
          <Input type="text" name="members"/>
        </FormGroup>
        <FormGroup>
          <Label for="boarddName">Owners</Label>
          <Input type="text" name="owners"/>
        </FormGroup>
      </span>
      <div className="buttons">
      <Button className="submit" type="submit" >Create</Button>
    </div>
    </Form>
  
);


 
 export default BoardCreator; 