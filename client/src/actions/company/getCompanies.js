import axios from "axios";
import { GET_COMPANIES, GET_COMPANIES_ERROR } from "../types";

const getCompany = () => async dispatch => {
  try {
    const response = await axios.get("/companies");

    dispatch({
      type: GET_COMPANIES,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_COMPANIES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export default getCompany;
