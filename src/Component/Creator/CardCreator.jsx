// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 
const CardCreator = ({
  handleSubmit,  
  closeToggle
}) => (
  <Form  onSubmit = {handleSubmit}>
  <span className="ListCreator">
  <FormGroup>
          <Label for="cardName">Card Name</Label>
          <Input type="text" name="cardName" placeholder="deliver logo" />
    </FormGroup>

      <FormGroup>
          <Label for="dueDate">Due date</Label>
          <Input type="date" name="dueDate" placeholder="01/01/2018" />
    </FormGroup>

   
  </span>
   <Button type="submit" >Submit</Button>

  </Form>
);

export default CardCreator;