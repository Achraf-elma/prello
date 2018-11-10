// Modules
import React from 'react';
import { Redirect } from 'react-router';

// Components
import AccountForm from './AccountForm';
import AccountNotif from './AccountNotif';

// Style
import '../../style/account.css';
import '../../style/App.css';

// http
import { ErrorLogin, ErrorForbidden, ErrorNotFound } from '../../request/requestErrors';
import { fetchUser, saveUserPreferences, saveUserCredentials } from '../../request/user';
import { fetchActionTypes } from '../../request/action';

class AccountViewHandler extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: false,
      redirect: false,
      actions: ["@@board/MOVE_LIST_IN_BOARD", "@@board/ADD_LIST_TO_BOARD"],
    };
  }
  handleError = (error) => {
    let redirect = (route) => this.setState({ redirect: route });
    return (
      Promise.reject(error)
      .catch(error => error instanceof ErrorLogin ? redirect('/login') : Promise.reject(error))
      .catch(error => error instanceof ErrorForbidden ? redirect('/home') : Promise.reject(error))
      .catch(error => error instanceof ErrorNotFound ? redirect('/home') : Promise.reject(error))
    );
  }
  componentDidMount() {
    Promise.all([
      fetchUser(null ),
      fetchActionTypes(),
    ])
    .then(([user, actions]) => this.setState({ user, actions }))
    .catch(this.handleError)
    .catch(error => console.error(error));
  }

  handleSubmitFullName = (fullName) => (
    saveUserCredentials( null , {
      fullName
    })
    .then( user => "Saved")
    .catch(this.handleError)
    .catch(error => console.error(error) || "Something went wrong" )
  );
  handleSubmitPassword = (password) => (
    saveUserCredentials( null , {
      password
    })
      .then(user => "Saved")
      .catch(this.handleError)
      .catch(error => console.error(error) ||  "Something went wrong")
  );
  handleSubmitSchedule = (hour) => (
    saveUserPreferences(null , {
      scheduleHour: hour
    })
      .then(user => "Saved")
      .catch(this.handleError)
      .catch(error => console.error(error) ||  "Something went wrong")
  );
  handleSubmitNotif = () => (
    saveUserPreferences(null , this.state.user.preferences)
      .then(user => "Saved")
      .catch(this.handleError)
      .catch(error => console.error(error) || "Something went wrong")
  );
  handleToggleNotif = (actionType, toggle) => {
    let user = this.state.user;
    user.preferences[actionType] = toggle;
    this.setState({ user });
  };

  render() {
    if(this.state.redirect){ return (<Redirect to={this.state.redirect} />); }
    else if(!this.state.user){ return (<div className="background" />); }
    else {
      return (
        <div className="account-handler">
          <div className="background" />
          <AccountForm
            user={this.state.user}
            handleSubmitFullName={this.handleSubmitFullName}
            handleSubmitPassword={this.handleSubmitPassword}
            />
          <AccountNotif
            preferences={this.state.user.preferences}
            actions={this.state.actions}
            handleSubmitSchedule={this.handleSubmitSchedule}
            handleToggleNotif={this.handleToggleNotif}
            handleSubmitNotif={this.handleSubmitNotif}
            />
        </div>
      )
    }
  }
}

export default AccountViewHandler;