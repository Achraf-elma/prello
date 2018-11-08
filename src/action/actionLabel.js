// Modules
import uuidv4 from "uuidv4";


  // Action type constants
  export const ADD_LABEL_IN_CARD = "@@label/ADD_LABEL_IN_CARD";

// Add a new card at the end of the list
export const addLabelInCard = (idCard, name, color) => ({
  type: ADD_LABEL_IN_CARD,
  payload: {
    id: uuidv4(),
    idCard: idCard,
    name: name,
    color: color
    
  }
})

