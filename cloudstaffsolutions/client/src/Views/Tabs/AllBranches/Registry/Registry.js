import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Registry.css"

function Registry() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="registry_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Credential</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Email Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <Form.Label className="text-lighter"> The system rule is for revenue to follow the Registrant's home branch. Ehenever a Registrant works for clients away from the home branch, the home branch receives credit for the revenue. By enabling this option , this branch will receive the revenue credit with no regard for the home branch of the registrants staffed at its clients.</Form.Label>
              </Form.Group>
              {/* <div className="w-100">
                <p style={{textAlign: 'justify' }}></p>
              </div> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registry;
