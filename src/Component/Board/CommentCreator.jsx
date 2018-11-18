// Modules
import React from 'react';


// Components
import { Form, FormGroup, Input } from 'reactstrap';

const CommentCreator = ({ handleSubmit }) => (
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