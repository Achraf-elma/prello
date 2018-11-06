// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col , Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Action builder
import { setTeamName, setTeamDisplayName, setTeamDesc, setTeamWebsite } from '../../action/actionOrganization';


// Styles
import '../../style/organization.css';



const OrgSettings = ({
    displayName,
    website,
    desc,
    dispatchForm
  }) => (
    <div className="OrgSettings">
    <Form onSubmit = {dispatchForm}>
      <FormGroup>
        <Label for="newDisplayName">Name</Label>
        <Input type = "text" name ="name" id="newDisplayName" placeholder={displayName}/>
      </FormGroup>
      <FormGroup>
        <Label for="newWebsite">Website</Label>
        <Input type = "text" name ="website" id="newWebsite" placeholder={website}/>
      </FormGroup>
      <FormGroup>
        <Label for="newDesc">Description</Label>
        <Input type = "text" name ="description" id ="newDesc" placeholder={desc}/>
      </FormGroup>
      <Button color="success" className="submit" type="submit" active>Submit</Button>
    </Form>
    </div>
  );


  
  const mapStateToProps = (state, props) => ({
    name: state.organization.name,
    displayName: state.organization.displayName,
    website: state.organization.website,
    desc: state.organization.desc
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
      dispatchForm : (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if (data.get('name') !== '') {dispatch(setTeamDisplayName(props.id, data.get('name')))}
        if (data.get('description') !== '') {dispatch(setTeamDesc(props.id, data.get('description')))}
        if (data.get('name') !== '') {dispatch(setTeamWebsite(props.id, data.get('website')))}
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrgSettings); 