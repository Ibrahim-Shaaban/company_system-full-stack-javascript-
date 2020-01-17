import React, { useEffect, Fragment } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { renderCompany } from "../../component-handlers/company";
import { getCompany, deleteCompany, clearCompany } from "../../actions/company";
const Company = ({
  getCompany,
  deleteCompany,
  history,
  clearCompany,
  match,
  company: { company, loading, error }
}) => {
  useEffect(() => {
    getCompany(match.params.id);
  }, [getCompany, match.params.id]);

  return (
    <Fragment>
      {renderCompany(
        company,
        loading,
        error,
        history,
        deleteCompany,
        clearCompany
      )}
    </Fragment>
  );
};

Company.propTypes = {
  getCompany: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  clearCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(mapStateToProps, {
  getCompany,
  deleteCompany,
  clearCompany
})(withRouter(Company));
