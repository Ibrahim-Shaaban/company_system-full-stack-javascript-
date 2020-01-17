import Loading from "../../components/layout/Loading";
import { Alert, Button, Col, Row } from "react-bootstrap";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const renderCompany = (
  company,
  loading,
  error,
  history,
  deleteCompany,
  clearCompany
) => {
  if (loading) return <Loading />;
  if (!loading && error !== null && company === null) {
    return (
      <Row style={{ marginTop: 10, padding: 10 }}>
        <Col md={12} className={"text-center"}>
          <Alert variant={"info"}>Company is not found</Alert>
        </Col>
      </Row>
    );
  }
  if (!loading && error === null && company !== null) {
    const { name, address, code, _id } = company;
    return (
      <Fragment>
        <Row style={{ marginTop: 10, padding: 10 }}>
          <Col md={12}>
            <h3>{name}</h3>

            <p>
              <span style={{ fontWeight: "lighter" }}> location : </span>
              {address}
            </p>

            <p>
              <span style={{ fontWeight: "lighter" }}> code : </span>
              {code}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, padding: 10 }}>
          <Col md={3} sm={5} xs={5}>
            <Button variant={"secondary"} as={Link} to={"/"}>
              back to companies
            </Button>
          </Col>
          <Col md={2} sm={2} xs={3}>
            <Button
              onClick={_ => clearCompany()}
              variant={"primary"}
              as={Link}
              to={`/edit-company/${_id}`}
            >
              edit
            </Button>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <Button
              variant={"danger"}
              onClick={_ => {
                deleteCompany(_id, history);
              }}
            >
              delete
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
  return <Loading />;
};

export default renderCompany;
