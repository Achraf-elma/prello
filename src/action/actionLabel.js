// Modules
import {ObjectId} from 'bson';

// Action type constants
export const ADD_LABEL_TO_CARD = "@@label/ADD_LABEL_TO_CARD";
export const SET_LABELS = "@@labels/SET_LABELS";

export const addLabelToCard = (idCard, idBoard, name, color) => ({
  type: ADD_LABEL_TO_CARD,
  payload: {
    id : new  ObjectId(),
    idCard: idCard,
    idBoard : idBoard ,
    name: name || "myLabel",
    color: color 
  }
})

export const setLabels = (labels) => ({
  socketAction: true,
  type: SET_LABELS,
  payload: labels
})


