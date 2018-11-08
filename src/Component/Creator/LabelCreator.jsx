// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Styles 
import '../../style/list.css';

const LabelCreator = ({
  handleSubmit  
}) => (
  <Form  onSubmit = {handleSubmit}>
  <span className="ListCreator">
  <FormGroup>
          <Label for="cardName">Label Name</Label>
          <Input type="text" name="labelName" placeholder="deliver logo" />
    </FormGroup>

      <FormGroup>
          <Label for="dueDate">Color </Label>
          <Input type="color" name="color"  />
    </FormGroup>

   
  </span>
   <Button className="submit" type="submit" >Add Label</Button>

  </Form>
);


 
 export default LabelCreator; 