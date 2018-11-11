// Modules
import React from 'react';

// Components
import { Form, FormGroup, Label, Input } from 'reactstrap';

const LabelCreator = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <span className="ListCreator">
      <FormGroup>
        <Label for="labelName">Label Name</Label>
        <Input type="text" name="labelName" placeholder="deliver logo" />
      </FormGroup>

      <FormGroup>
        <Label for="color">Color </Label>
        <Input type="color" name="color" />
      </FormGroup>
    </span>
    <button className="addElementButton" type="submit" >Add Label</button>
  </Form>
);

export default LabelCreator; 