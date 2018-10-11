// Store definition
export interface ApplicationState {
  // board: Board,
  // list: List,
  card: Card,
}

// Card definition
export interface Card {
  name: String
}

export const initCard: Card = {
  name: "new card"
};