// Modules
import React from 'react';

// Components
import { Form, FormGroup, Label, Input } from 'reactstrap';

const CheckListCreator = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <span className="ListCreator">
      <FormGroup>
        <Label for="labelName">New toDo-List</Label>
        <Input type="text" name="checkListName" placeholder="My task for the week" />
      </FormGroup>
    </span>
    <button className="addElementButton" type="submit" >Add toDo-List</button>
  </Form>
);

export default CheckListCreator; 