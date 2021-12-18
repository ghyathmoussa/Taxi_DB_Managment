
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

const InsertTaxiForm = (props) =>  {
  return (
    
    <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Plate Number</Form.Label>
            <Form.Control placeholder="Plate Number"/>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Car Model</Form.Label>
            <Form.Control placeholder="Car Model" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Station Number</Form.Label>
            <Form.Control placeholder="Station Number"/>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  );
}
export { InsertTaxiForm };

