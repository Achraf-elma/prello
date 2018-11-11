// Modules
import React from 'react';

// Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../../style/home.css';
const BoardCreator = ({ handleSubmit }) => (
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
        <Label for="isPublic"> Privacy </Label>
        <Input type="select" name="isPublic">
        <option value={false}>Private</option>
        <option value={true}>Public</option>
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