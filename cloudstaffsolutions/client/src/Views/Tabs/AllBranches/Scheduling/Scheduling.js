import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Scheduling.css"

function Scheduling() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Order Entry</Form.Label>

                <div className="inner_ d-flex">
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_schedule">
                      <Form.Check type="checkbox" />
                      <p style = {{whiteSpace: 'nowrap', fontSize: '11px'}}>Enable selection of secondary disciplines and specialities when adding orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
              </div>
              </Form>

              <Form className="branch_form">
              <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Default Discipline</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Discipline:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
              </div>
              </Form>


              <Form className="branch_form">
              <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Travel/Contract Margins</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>PPC Target Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <div className="schedule_margin1">
                    <Form.Control type = "text">
                      </Form.Control>
                      <p>%</p>
                      </div>
                      <p style = {{whiteSpace: 'nowrap'}}>This margin sets the default marginlock value for the price profit calculator</p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Minimum Allowed Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <div className="schedule_margin1">
                    <Form.Control type = "text">
                      </Form.Control>
                      <p>%</p>
                      </div>
                      <p style = {{whiteSpace: 'nowrap'}}>This margin sets the absolute lower limit allowed for booking contract/travel shifts. Set to zero(0) for no-minimum</p>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Scheduling;
