// Module
import React from "react";
import {Card, CardHeader, CardBody} from 'reactstrap';

// Components
import AccountNotifCheckBox from './AccountNotifCheckBox';


class AccountNotif extends React.Component{
  constructor() {
    super();
    this.state = {message: false}
  }
  handleSchedule = (event) => {
    event.preventDefault();
    this.props.handleSubmitSchedule(this.scheduleInput.current.value)
    .then(message => this.setState({message: {schedule: message}}));
  }
  handleSubmitNotif = (event) => {
    event.preventDefault();
    this.props.handleSubmitNotif()
    .then(message => this.setState({ message: { notif: message } }));
  }
  render(){
    this.scheduleInput = React.createRef();
    const {
      preferences,
      handleToggleNotif,
      actions,
    } = this.props;
    return (
      <Card className="account-form">
        <CardHeader className="account-title">
          Daily Digest
        </CardHeader>
        <CardBody>
          <form
            onSubmit={this.handleSchedule}
            className="account-form-schedule"
            >
            <span>Report hour:</span>
            <input
              name="hour"
              type="number"
              min="0"
              max="23"
              defaultValue={preferences.scheduleHour}
              ref={this.scheduleInput}
              />
            {this.state.message && this.state.message.schedule && (
              <strong className="account-form-message">{this.state.message.schedule}</strong>
            )}
            <input className="account-form-submit" type="submit" value="save" />
          </form>
          <form className="account-form-notif" onSubmit={this.handleSubmitNotif}>
            <ul>
              {actions.map( actionType => (
                <AccountNotifCheckBox
                  key={actionType}
                  actionType={actionType}
                  checked={preferences[actionType]}
                  handleToggleNotif={(toggle) => handleToggleNotif( actionType, toggle )}
                />
              ))}
            </ul>
            {this.state.message && this.state.message.notif && (
              <strong className="account-form-message">{this.state.message.notif}</strong>
            )}
            <input className="account-form-submit" type="submit" value="save" />
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default AccountNotif;