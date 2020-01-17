import axios from "axios";
import { GET_COMPANY, GET_COMPANY_ERROR } from "../types";
import addAlert from "../alert";

const getCompany = companyId => async dispatch => {
  try {
    const response = await axios.get(`/companies/${companyId}`);
    dispatch({
      type: GET_COMPANY,
      payload: response.data
    });
  } catch (error) {
    const { errors } = error.response.data;
    if (errors.length) {
      errors.forEach(error => {
        dispatch(addAlert(error.msg, "info"));
      });

      dispatch({
        type: GET_COMPANY_ERROR,
        payload: { errors }
      });
    } else {
      dispatch({
        type: GET_COMPANY_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};

export default getCompany;
