import {
  ADD_COMPANY_ERROR,
  ADD_COMPANY,
  GET_COMPANIES_ERROR,
  GET_COMPANIES,
  DELETE_COMPANY_ERROR,
  DELETE_COMPANY,
  GET_COMPANY_ERROR,
  GET_COMPANY,
  CLEAR_COMPANY,
  EDIT_COMPANY,
  EDIT_COMPANY_ERROR
} from "../actions/types";

let initialState = {
  companies: [],
  company: null,
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMPANY:
      return {
        ...state,
        loading: false,
        companies: [...state.companies, payload],
        error: null
      };

    case DELETE_COMPANY:
      return {
        ...state,
        loading: false,
        error: null,
        companies: state.companies.filter(
          ({ _id }) => payload.companyId !== _id
        )
      };
    case EDIT_COMPANY:
      return {
        ...state,
        loading: false,
        error: null,
        companies: state.companies.map(company =>
          company._id === payload._id ? payload : company
        )
      };

    case GET_COMPANIES:
      return {
        ...state,
        loading: false,
        companies: payload,
        error: null
      };

    case GET_COMPANY:
      return {
        ...state,
        loading: false,
        company: payload,
        error: null
      };

    case ADD_COMPANY_ERROR:
    case GET_COMPANIES_ERROR:
    case DELETE_COMPANY_ERROR:
    case GET_COMPANY_ERROR:
    case EDIT_COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case CLEAR_COMPANY:
      return {
        ...state,
        loading: true,
        error: null,
        company: null
      };

    default:
      return state;
  }
}
