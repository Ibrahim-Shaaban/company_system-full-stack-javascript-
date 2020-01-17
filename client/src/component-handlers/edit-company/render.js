import Loading from "../../components/layout/Loading";
import { Alert, Button, Col, Row } from "react-bootstrap";
import {
  handleSubmit,
  renderForm
} from "../../formHandlers/company/edit-company";
import React from "react";
import { Link } from "react-router-dom";

const render = (
  { loading, error, company },
  validated,
  setValidated,
  editCompany,
  companyId,
  history
) => {
  if (loading) return <Loading />;
  if (!Loading && error !== null && company === null) {
    return (
      <Row style={{ marginTop: 10, padding: 10 }}>
        <Col md={12} className={"text-center"}>
          <Alert variant={"info"}>Company is not found</Alert>
        </Col>
      </Row>
    );
  }
  if (!loading && company !== null) {
    return (
      <Row style={{ marginTop: 10, padding: 10 }}>
        <Col md={4} style={{ marginBottom: 10 }}>
          <Button variant={"secondary"} as={Link} to={"/"}>
            back to companies
          </Button>
        </Col>
        {renderForm(
          validated,
          setValidated,
          handleSubmit,
          editCompany,
          company,
          companyId,
          history
        )}
      </Row>
    );
  }
  return <Loading />;
};

export default render;
