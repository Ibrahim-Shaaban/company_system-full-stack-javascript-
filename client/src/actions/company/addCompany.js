import axios from "axios";
import uuid from "uuid";
import { ADD_COMPANY, ADD_COMPANY_ERROR } from "../types";
import addAlert from "../alert";

const addCompany = ({ name, address }, history) => async dispatch => {
  try {
    const code = uuid.v4();
    const response = await axios.post(
      "/companies",
      JSON.stringify({ name, address, code }),
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: ADD_COMPANY,
      payload: response.data
    });

    dispatch(addAlert("company is added successfully", "success"));
    history.push("/");
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach(error => {
        dispatch(addAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: ADD_COMPANY_ERROR,
      payload: { errors }
    });
  }
};

export default addCompany;
