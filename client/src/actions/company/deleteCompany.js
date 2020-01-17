import axios from "axios";
import { DELETE_COMPANY, DELETE_COMPANY_ERROR } from "../types";
import addAlert from "../alert";

const deleteCompany = (companyId, history) => async dispatch => {
  try {
    await axios.delete(`/companies/${companyId}`);
    dispatch(addAlert("Company is deleted successfully", "success"));
    dispatch({
      type: DELETE_COMPANY,
      payload: {
        companyId
      }
    });
    history.push("/");
  } catch (error) {
    const { errors } = error.response.data;

    if (errors.length) {
      errors.forEach(error => {
        dispatch(addAlert(error.msg, "info"));
      });

      dispatch({
        type: DELETE_COMPANY_ERROR,
        payload: { errors }
      });
    } else {
      dispatch({
        type: DELETE_COMPANY_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};

export default deleteCompany;
