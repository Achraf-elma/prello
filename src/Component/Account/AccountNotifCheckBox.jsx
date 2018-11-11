// Module
import React from "react";

class AccountNotifCheckBox extends React.Component{
  handleCheckbox = () => {
    this.props.handleToggleNotif(!this.props.checked);
  }

  printActionType = (actionType) => {
    // action look like "@@board/MOVE_LIST_IN_BOARD"
    return (
      actionType
      .slice(2)
      .split("/")
      .map(word => (
        word.split("_").map(subWord => (
          subWord.toLowerCase()
        )).join(" ")
      )).join(" - ")
    );
  }
  render(){
    this.checkboxInput = React.createRef();
    const {
      actionType,
      checked,
    } = this.props;
    return (
      <li className="account-form-notif-line">
        <label
          for={actionType}
          className="account-form-notif-text">
          {this.printActionType(actionType)}
        </label>
        <input
          className="account-form-notif-line"
          type="checkbox"
          checked={checked || false}
          name={actionType}
          onChange={this.handleCheckbox}
          />
      </li>
    );
  }
}

export default AccountNotifCheckBox ;