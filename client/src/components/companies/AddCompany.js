import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  handleSubmit,
  renderForm
} from "../../formHandlers/company/add-company";
import { addCompany } from "../../actions/company";

const AddCompany = ({ history, addCompany }) => {
  const [validated, setValidated] = useState(false);

  return (
    <Row style={{ marginTop: 10, padding: 10 }}>
      <Col md={4} style={{ marginBottom: 10 }}>
        <Button variant={"secondary"} as={Link} to={"/"}>
          back to companies
        </Button>
      </Col>
      {renderForm(validated, setValidated, handleSubmit, addCompany, history)}
    </Row>
  );
};

AddCompany.propTypes = {
  addCompany: PropTypes.func.isRequired
};

export default connect(null, {
  addCompany
})(withRouter(AddCompany));
