// Modules
import React from 'react';
import GoogleLogin from 'react-google-login';
import{Card , CardHeader, CardBody, CardTitle, Button, CardText} from 'reactstrap';

// css
import "../../style/login&signup.css";

// http
import { GOOGLE_CLIENT } from '../../config.json';
import { logIn } from '../../request/login';

const TEXT_INPUT_MAX_LENGTH = 150;

class LoginCard extends React.Component {
  constructor(){
    super();
    this.state = {error: ""};
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    const password = this.passwordInput.current.value;
    const id = this.idInput.current.value;

    const cleanPassword = password && password.replace(/(^\s*)|(\s*$)/g, "")
    const cleanId = id && id.replace(/(^\s*)|(\s*$)/g, "");

    if (cleanPassword && cleanId) {
      logIn(id, password);
    } else {
      this.passwordInput.current.value = cleanPassword;
      this.idInput.current.value = cleanId;
      this.setState({ error: "All fields are required" })
    }
  }

  onGoogleSuccessHandler = (response) => {
    //JWT = response.hg.id_token
  }

  onGoogleFailureHandler = (response) => {
  
  }

  render(){
    this.passwordInput = React.createRef();
    this.idInput = React.createRef();
    return (
      <div>
      <div className="login-background"/>
      <Card  className="login">
          <CardHeader className="loginTitle">
            Login
         </CardHeader>
         <CardBody>
        <form className="login-form" onSubmit={this.onSubmitHandler}>
          <input
            ref={this.idInput}
            className="login-form-id"
            type="text"
            name="id"
            placeholder="Full name or Email"
            maxLength={TEXT_INPUT_MAX_LENGTH}
            />
          <input
            ref={this.passwordInput}
            className="login-form-password"
            type="password"
            name="password"
            placeholder="password"
            maxLength={TEXT_INPUT_MAX_LENGTH}
            />
          <input className="login-form-submit" type="submit" value="Login"/>
          {this.state.error && <span className="login-form-error">{this.state.error}</span>}
        </form>
        <div className="login-form-google">
          <GoogleLogin
            className="login-google"
            clientId={GOOGLE_CLIENT}
            buttonText='Login with google'
            onSuccess={this.onGoogleSuccessHandler}
            onFailure={this.onGoogleFailureHandler}
          />
        </div>

      </CardBody>
      </Card>
      </div>
    );
  }
}



export default LoginCard;