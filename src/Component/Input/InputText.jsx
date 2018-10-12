// // Modules
// import * as React from 'react';
// import { Component } from 'react';

// interface Props {
//   validation: Function
//   value: string
// }

// /**
// * A custom controlled input text component
// * it needs a "validation" function props
// */
// export class TextInput extends Component<Props, {}>{
//   private textfield = React.createRef<HTMLInputElement>()
//   /**
//   * React Hook, set value just after a render
//   * trigger a render if needed
//   */
//   componentDidUpdate(previousProps: Props) {
//     if (this.props.value !== previousProps.value) {
//       // Actualize the value when changed
//       this.textfield.value = (this.props.value || "");
//     }
//   }

//   /**
//   * There are few type of controlled input
//   * here, the input is free from control until a user leave it
//   * if the user hit escape, the input is reset
//   */
//   handleOnBlur = (event: React.KeyboardEvent, input: HTMLInputElement) => {
//     this.props.validation(input.value);
//   }

//   handleOnKeyUp = (event: React.KeyboardEvent, input: HTMLInputElement) => {
//     if (event.keyCode === 13) {
//       this.textfield.blur();
//       // this.props.validation( input.value );
//     } else if (event.keyCode === 27) {
//       input.value = (this.props.value || "");
//     }
//   }


//   render() {
//     this.textfield;
//     const {
//       value,
//     } = this.props;
//     return (
//       <input
//         className="TextInput"
//         type="text"
//         defaultValue={value}

//         ref={this.textfield}
//         onKeyUp={(event: React.KeyboardEvent) => this.handleOnKeyUp(event, this.textfield)}
//         onBlur={(event: React.KeyboardEvent) => this.handleOnBlur(event, this.textfield)}
//       />
//     )
//   }
// }