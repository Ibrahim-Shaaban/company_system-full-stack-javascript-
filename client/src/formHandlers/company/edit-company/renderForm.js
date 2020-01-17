import { Button, Col, Form } from "react-bootstrap";
import React from "react";

const renderForm = (
  validated,
  setValidated,
  handleSubmit,
  editCompany,
  { name, address, code },
  companyId,
  history
) => (
  <Col>
    <Form
      noValidate
      validated={validated}
      onSubmit={e =>
        handleSubmit(e, setValidated, editCompany, companyId, code, history)
      }
    >
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="company name"
            name="name"
            defaultValue={name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid company name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            name="address"
            defaultValue={address}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter the company address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button type="submit">Submit form</Button>
    </Form>
  </Col>
);

export default renderForm;
