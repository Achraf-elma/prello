// Modules
import React from 'react';
import GoogleLogin from 'react-google-login';

// css
import "../../style/login&signup.css";


// http
import { GOOGLE_CLIENT } from '../../config.json';
import { signUp, googleLogin } from '../../request/login';

const TEXT_INPUT_MAX_LENGTH = 150

class SignupCard extends React.Component {
  constructor(){
    super();
    this.state = {error: ""}
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const password1 = this.passwordInput1.current.value;
    const password2 = this.passwordInput2.current.value;
    const email = this.emailInput.current.value;
    const fullName = this.fullNameInput.current.value;

    const cleanPassword1 = password1 && password1.replace(/(^\s*)|(\s*$)/g, "")
    const cleanPassword2 = password2 && password2.replace(/(^\s*)|(\s*$)/g, "")
    const cleanEmail = email && email.replace(/(^\s*)|(\s*$)/g, "");
    const cleanFullName = fullName && fullName.replace(/(^\s*)|(\s*$)/g, "");

    if( cleanPassword1 && cleanPassword2 && cleanEmail && cleanFullName){
      if( cleanPassword1 === cleanPassword2 ){
        signUp(fullName, email, cleanPassword1);
      } else {
        this.passwordInput1.current.value = "";
        this.passwordInput2.current.value = "";
        this.emailInput.current.value = cleanEmail;
        this.setState({ error: "Password fields doesn't match" })
      }
    } else {
      this.passwordInput1.current.value = cleanPassword1;
      this.passwordInput2.current.value = cleanPassword2;
      this.emailInput.current.value = cleanEmail;
      this.fullNameInput.current.value = cleanFullName;
      this.setState({error: "All fields are required"})
    }
  }

  onGoogleSuccessHandler = (response) => {
    googleLogin(response);
  }

  onGoogleFailureHandler = (response) => {
    console.error( JSON.stringify( response, null, 2 ));
  }

  render() {
    this.emailInput = React.createRef();
    this.fullNameInput = React.createRef();
    this.passwordInput1 = React.createRef();
    this.passwordInput2 = React.createRef();
    return (
      <div className="signup">
        <form className="signup-form" onSubmit={this.onSubmitHandler}>
          <input
            ref={this.fullNameInput}
            className="signup-form-fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
            maxLength={TEXT_INPUT_MAX_LENGTH}
          />
          <input
            ref={this.emailInput}
            className="signup-form-email"
            type="emain"
            name="email"
            placeholder="Email"
            maxLength={TEXT_INPUT_MAX_LENGTH}
            />
          <input
            ref={this.passwordInput1}
            className="signup-form-password"
            type="password"
            name="password1"
            placeholder="Password"
            maxLength={TEXT_INPUT_MAX_LENGTH}
            />
          <input
            ref={this.passwordInput2}
            className="signup-form-password"
            type="password"
            name="password2"
            placeholder="Confirm password"
            maxLength={TEXT_INPUT_MAX_LENGTH}
          />
          <input className="signup-form-submit" type="submit" value="Sign up"/>
          {this.state.error && <span className="signup-form-error">{this.state.error}</span>}
        </form>
        <div className="signup-form-google">
          <GoogleLogin
            type="button"
            className="signup-google"
            clientId={GOOGLE_CLIENT}
            buttonText="Signup with google"
            onSuccess={this.onGoogleSuccessHandler}
            onFailure={this.onGoogleFailureHandler}
          />
        </div>
      </div>
    );
  }
}

export default SignupCard;