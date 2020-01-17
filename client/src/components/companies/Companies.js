import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getCompanies,
  deleteCompany,
  clearCompany
} from "../../actions/company";
import { renderCompanies } from "../../component-handlers/companies";

const Companies = ({
  company: { companies, loading, error },
  getCompanies,
  deleteCompany,
  clearCompany,
  history
}) => {
  useEffect(() => {
    getCompanies();
    // eslint-disable-next-line
  }, [getCompanies]);

  return (
    <Fragment>
      {renderCompanies(
        { companies, loading, error },
        deleteCompany,
        clearCompany,
        history
      )}
    </Fragment>
  );
};

Companies.propTypes = {
  getCompanies: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(mapStateToProps, {
  getCompanies,
  deleteCompany,
  clearCompany
})(withRouter(Companies));
