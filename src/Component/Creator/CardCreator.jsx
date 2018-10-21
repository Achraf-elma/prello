// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';

const CardCreator = ({
  addCard
}) => (
  <span className="ListCreator">
    <InputText
     className="addListInput"
      value=""
      placeHolder="Add a new card..."
      resetable
      onChange={(cardName) => addCard(cardName)}
    />
  </span>
);

export default CardCreator;