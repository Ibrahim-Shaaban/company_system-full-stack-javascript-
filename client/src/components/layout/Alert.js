import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const CustomAlert = ({ alerts }) => {
  if (alerts.length > 0) {
    const alertHandle = alerts.map(alert => {
      return (
        <Col style={{ marginTop: 10, padding: 10 }} key={alert.id}>
          <Alert className={"text-center"} variant={alert.alertType}>
            {alert.msg}
          </Alert>
        </Col>
      );
    });

    return <Row>{alertHandle}</Row>;
  }
  return null;
};

CustomAlert.propTypes = { alerts: PropTypes.array.isRequired };
const mapStateToProps = state => {
  return { alerts: state.alert };
};

export default connect(mapStateToProps)(CustomAlert);
