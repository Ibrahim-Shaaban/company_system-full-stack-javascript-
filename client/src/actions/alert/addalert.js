import { ADD_ALERT, REMOVE_ALERT } from "../types";
import uuid from "uuid";

const addAlert = (msg, alertType, timeout = 4000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: ADD_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    });
  }, timeout);
};

export default addAlert;
