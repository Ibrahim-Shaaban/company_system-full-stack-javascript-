import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { editCompany, getCompany } from "../../actions/company";
import { render } from "../../component-handlers/edit-company";

const EditCompany = ({
  history,
  getCompany,
  match,
  editCompany,
  company: { loading, company, error }
}) => {
  useEffect(() => {
    getCompany(match.params.id);
  }, [getCompany, match.params.id]);
  const [validated, setValidated] = useState(false);

  return (
    <Fragment>
      {render(
        { loading, company, error },
        validated,
        setValidated,
        editCompany,
        match.params.id,
        history
      )}
    </Fragment>
  );
};

EditCompany.propTypes = {
  getCompany: PropTypes.func.isRequired,
  editCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(mapStateToProps, { getCompany, editCompany })(
  withRouter(EditCompany)
);
