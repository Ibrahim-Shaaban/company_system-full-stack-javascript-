import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Alert from "../layout/Alert";

import NotFound from "../layout/NotFound";
import Companies from "../companies/Companies";
import AddCompany from "../companies/AddCompany";
import Company from "../companies/Company";
import EditCompany from "../companies/EditCompany";

export const Routes = () => {
  return (
    <Container>
      <Alert />
      <Switch>
        <Route exact path="/" component={Companies} />
        <Route exact path="/add-company" component={AddCompany} />
        <Route exact path="/company/:id" component={Company} />
        <Route exact path="/edit-company/:id" component={EditCompany} />

        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};
