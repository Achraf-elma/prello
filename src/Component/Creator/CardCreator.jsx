// Modules
import React from 'react';

// Components
import InputText from '../Input/InputText';

const CardCreator = ({
  addCard, 
  closeToggle
}) => (
  <span className="ListCreator">
    <InputText
     className="addListInput"
      value=""
       placeHolder="Description"
      resetable
      onChange={(cardName) => {
        addCard(cardName)
        closeToggle() 
      } 
    }
    />
  </span>
);

export default CardCreator;