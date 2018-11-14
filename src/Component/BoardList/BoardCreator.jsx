// Modules
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
// Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../../style/home.css';
const members = [
  { value: 'idAchraf', label: 'Achraf' },
  { value: 'idAssil', label: 'Assil' },
  { value: 'idClement', label: 'Clement' },
  { value: 'idJulia', label: 'Julia' },
  { value: 'idHugo', label: 'Hugo' }
];

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
        <Select 
        closeMenuOnSelect={false}
        components={makeAnimated()}
        defaultValue={[]}
        isMulti
        options={members}
        name="members" /> 

      </FormGroup>
        
    </span>
    <div className="buttons">
      <Button className="submit" type="submit" >Create</Button>
    </div>
  </Form>
);

export default BoardCreator; 