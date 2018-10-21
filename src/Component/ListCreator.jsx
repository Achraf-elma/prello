// Modules
import React from 'react';

// Components
import InputText from './Input/InputText';

const ListCreator = ({
  addList
}) => (
  <span className="ListCreator">
    <InputText
     className="addListInput"
      value=""
      placeHolder="Add a new list..."
      resetable
      onChange={(listName) => addList(listName)}
    />
  </span>
);

export default ListCreator;