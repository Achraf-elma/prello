// Module
import React from "react";
import GoogleLogin from 'react-google-login';
import { Card, CardBody, CardHeader } from 'reactstrap';
// http
import { GOOGLE_CLIENT } from '../../config.json';
import { googleLink } from '../../request/login';

class AccountForm extends React.Component{
  constructor(){
    super();
    this.state = {message: false};
  }

  handleFullName = (event) => {
    event.preventDefault();
    const fullName = this.fullNameInput.current.value;
    const cleanFullName = fullName && fullName.replace(/(^\s*)|(\s*$)/g, "");
    if( cleanFullName.length < 3 ) {
      this.setState({message: {fullName:"Provide a longer name"}});
    } else {
      this.props.handleSubmitFullName(cleanFullName)
      .then(message => this.setState({ message: { fullName: message } }));
    }
  };

  handlePassword = (event) => {
    event.preventDefault();
    const password = this.passwordInput.current.value;
    const password2 = this.password2Input.current.value;

    const cleanPassword = password && password.replace(/(^\s*)|(\s*$)/g, "")
    const cleanPassword2 = password2 && password2.replace(/(^\s*)|(\s*$)/g, "")

    if (cleanPassword && cleanPassword2 ) {
      if (cleanPassword === cleanPassword2) {
        this.props.handleSubmitPassword(cleanPassword)
        .then(message => this.setState({ message: { password: message } }));
      } else {
        this.passwordInput.current.value = "";
        this.password2Input.current.value = "";
        this.setState({ message: { password: "Password fields doesn't match" }})
      }
    } else {
      this.passwordInput.current.value = cleanPassword;
      this.password2Input.current.value = cleanPassword2;
      this.setState({ message: { password: "All fields are required" }})
    }
  };
  onGoogleSuccessHandler = (response) => {
    googleLink(response)
  }

  onGoogleFailureHandler = (response) => {
    this.setState({ error: {fullName:"Google auth failed"}});
  }

  render(){
    this.fullNameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.password2Input = React.createRef();

    const {
      user,
    } = this.props;
    return (
      <Card className="account-form">
        <CardHeader className="account-title">
          {user.fullName || "me"}
        </CardHeader>
        <CardBody>
          <form
            onSubmit={this.handleFullName}
            className="account-form-fullname"
            >
            <input type="text" defaultValue={user.fullName} maxLength="150" ref={this.fullNameInput}/>
            <input className="account-form-submit" type="submit" value="save" />
            {this.state.message && this.state.message.fullName && (
              <strong className="account-form-message">{this.state.message.fullName}</strong>
            )}
          </form>
          <form
            onSubmit={this.handlePassword}
            className="account-form-password"
            >
            <input type="password" placeholder="New password" maxLength="150" ref={this.passwordInput}/>
            <input type="password" placeholder="Confirm password" maxLength="150" ref={this.password2Input} />
            {this.state.message && this.state.message.password && (
              <strong className="account-form-message">{this.state.message.password}</strong>
            )}
            <input className="account-form-submit" type="submit" value="save" />
          </form>
          {!user.google && (<GoogleLogin
            className="login-google"
            clientId={GOOGLE_CLIENT}
            buttonText='Login with google'
            onSuccess={this.onGoogleSuccessHandler}
            onFailure={this.onGoogleFailureHandler}
          />)}
        </CardBody>
      </Card>
    );
  }
} 

export default AccountForm;