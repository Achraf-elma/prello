// Modules
import React from 'react';
import classNames from 'classnames';

/**
* A custom controlled input text component
* it needs a "validation" function props
*/
export default class InputText extends React.Component {
  /**
  * React Hook, set value just after a render
  * trigger a render if needed
  */
  componentDidUpdate(previousProps, previousState) {
    if (this.props.value !== previousProps.value || this.props.resetable) {
      // Actualize the value when changed
      this.textfield.current.value = (this.props.value ||  "");
    }
  }

  /**
  * There are few type of controlled input
  * here, the input is free from control until a user leave it
  * if the user hit escape, the input is reset
  */
  handleOnBlur = (event, input) => {
    if(this.props.value != input.value){
      this.props.onChange(input.value);
    }
  }

  handleOnKeyUp = (event, input) => {
    if (event.keyCode === 13) {
      this.textfield.current.blur();
      // this.props.validation( input.value );
    } else if (event.keyCode === 27) {
      input.value = (this.props.value ||  "");
    }
  }


  render() {
    this.textfield = React.createRef();
    const {
      className,
      style,
      placeHolder,
      value,
      disabled,
      required,
    } = this.props;
    return (
      <input
        className={classNames("InputText", className)}
        type="text"
        style={style}
        disabled={disabled}
        placeholder={placeHolder}
        required={required}
        defaultValue={value}

        ref={this.textfield}
        onKeyUp={(event) => this.handleOnKeyUp(event, this.textfield.current)}
        onBlur={(event) => this.handleOnBlur(event, this.textfield.current)}
      />
    )
  }
}