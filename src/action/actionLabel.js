// Modules
import uuidv4 from "uuidv4";

// Action type constants
export const ADD_LABEL_TO_CARD = "@@label/ADD_LABEL_TO_CARD";
export const SET_LABELS = "@@labels/SET_LABELS";

export const addLabelToCard = (idCard, idBoard, name, color) => ({
  type: ADD_LABEL_TO_CARD,
  payload: {
    id: uuidv4(),
    idCard: idCard,
    idBoard : idBoard,
    name: name,
    color: color 
  }
})

export const setLabels = (labels) => ({
  socketAction: true,
  type: SET_LABELS,
  payload: labels
})


