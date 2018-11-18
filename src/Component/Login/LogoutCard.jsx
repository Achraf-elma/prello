import React from 'react';
import { connect } from 'react-redux';
import {  Container} from 'reactstrap';
import client from '../../request/client'
import { Link } from 'react-router-dom';

class LogoutCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
       disconnected : false
    }
   
  }


  componentDidMount(){ 
      client.removeCredentials()
   }
  

  render() {
    const {
       
    } = this.props;
    return (
          <Container>
              You are now disconnected. 
              <Link to={"/homepage"} > Go to home page </Link>
          </Container>
      )
  }
}
const mapStateToProps = ( state, props ) => ({
  
})

const mapDispatchToProps = ( dispatch, props ) => ( {
  
});

export default connect(mapStateToProps,mapDispatchToProps)(LogoutCard); 