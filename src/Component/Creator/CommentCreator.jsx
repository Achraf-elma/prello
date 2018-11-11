// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Styles 
import '../../style/list.css';
const CommentCreator = ({
  handleSubmit  
}) => (

  <Form  onSubmit = {handleSubmit}>
  <span className="ListCreator">

      <FormGroup>
          <Input type="textarea" name="text"  />
    </FormGroup>

   
  </span>
   <button className="addElementButton" type="submit" >Add Comment</button>

  </Form>
);


 
 export default CommentCreator; 