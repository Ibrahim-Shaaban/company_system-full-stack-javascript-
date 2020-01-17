import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Row
      style={{
        padding: 10,
        position: "absolute",
        top: "50%",
        bottom: "50%",
        right: "25%",
        left: "25%"
      }}
    >
      <Col className={"text-center"}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </Col>
    </Row>
  );
};

export default Loading;
