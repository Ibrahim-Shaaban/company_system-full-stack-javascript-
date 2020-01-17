import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row style={{ marginTop: 10, padding: 10 }}>
      <Col className={"text-center"}>
        <Alert variant={"secondary"}>This page is not found</Alert>
      </Col>
    </Row>
  );
};

export default NotFound;
