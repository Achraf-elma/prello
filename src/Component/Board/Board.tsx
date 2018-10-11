// Modules
// TODO: Import react (it avert the transpiler it needs JSX )
import { Dispatch } from "redux";
// TODO: Import connect from react-redux

// Types
import { ApplicationState } from '../../type';

// Redux
// TODO: Import redux interaction functions

// Components
// TODO: Import direct children components

interface InheritedProps {
  // TODO: Add inheritedProps field
}

interface ConnectedProps {
  // TODO: Add state fetched props
}

interface DispatchProps {
  // TODO: Add action props
}

type Props = InheritedProps & ConnectedProps & DispatchProps

const Board = ({
  // TODO: Put destructured props
}: Props) => (
  null // TODO: Create JSX DOM
);

const mapStateToProps = ( state: ApplicationState, props: InheritedProps ) => ({
  // TODO: Add store state to the component props
})

const mapDispatchToProps = ( dispatch: Dispatch<any>, props: InheritedProps ) => ({
  // TODO: Add 
})

export default Board // TODO: Export connected Components