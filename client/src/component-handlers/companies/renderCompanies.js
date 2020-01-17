import Loading from "../../components/layout/Loading";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Row,
  Table
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const renderCompanies = (
  { companies, loading, error },
  deleteCompany,
  clearCompany,
  history
) => {
  if (loading) {
    return <Loading />;
  }
  if (!loading && error === null && !companies.length) {
    return (
      <Row style={{ marginTop: 10, padding: 10 }}>
        <Col md={12} className={"text-center"}>
          No companies found
        </Col>
      </Row>
    );
  }
  if (!loading && error === null && companies.length) {
    return (
      <Row style={{ marginTop: 10, padding: 10 }}>
        <Col md={12}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(({ name, address, _id }) => {
                return (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>
                      <ButtonToolbar>
                        <ButtonGroup className="mr-auto ml-auto mb-1 mt-1">
                          <Button
                            onClick={_ => clearCompany()}
                            variant="secondary"
                            as={Link}
                            to={`/company/${_id}`}
                          >
                            view
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup className="mr-auto ml-auto mb-1 mt-1">
                          <Button
                            onClick={_ => clearCompany()}
                            variant="primary"
                            as={Link}
                            to={`/edit-company/${_id}`}
                          >
                            edit
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup className="mr-auto ml-auto mb-1 mt-1">
                          <Button
                            variant="danger"
                            onClick={_ => deleteCompany(_id, history)}
                          >
                            delete
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }

  return <Loading />;
};

export default renderCompanies;
