import { REMOVE_ALERT, ADD_ALERT } from "../actions/types";

let initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);

    default:
      return state;
  }
}
