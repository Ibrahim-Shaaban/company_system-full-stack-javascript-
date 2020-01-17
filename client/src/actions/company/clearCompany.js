import { CLEAR_COMPANY } from "../types";

const clearCompany = () => dispatch => {
  dispatch({
    type: CLEAR_COMPANY
  });
};

export default clearCompany;
