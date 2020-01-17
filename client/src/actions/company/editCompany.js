import axios from "axios";
import { EDIT_COMPANY, EDIT_COMPANY_ERROR } from "../types";
import addAlert from "../alert";

const editCompany = (
  { name, address, companyId, code },
  history
) => async dispatch => {
  try {
    const response = await axios.put(
      `/companies/${companyId}`,
      JSON.stringify({ name, address, code }),
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: EDIT_COMPANY,
      payload: response.data
    });

    dispatch(addAlert("company is edited successfully", "success"));
    history.push("/");
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach(error => {
        dispatch(addAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: EDIT_COMPANY_ERROR,
      payload: { errors }
    });
  }
};

export default editCompany;
