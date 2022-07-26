import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./Registry.css"

function Registry() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="registry_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Credential Email Notifications: </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Email Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                    <Form.Select>
                        <option>6:00 AM</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
              {/* <div className="w-100">
                <p style={{textAlign: 'justify' }}></p>
              </div> */}
            </div>
          </Form>

          <Form className="registry_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Registrant Profile Report Header: </Form.Label>

                <div className="inner_ d-flex">
                  <div className="div_first">
                    <Button className="button_div1">Choose File</Button>
                    <p className="button_p">No file choosen</p>
                    </div>
                    <div className="div_second">
                    <Button className="button_div2"><i class="fa-solid fa-ban"></i>Delete</Button>
                    <Button className="button_div3"><i class="fa-solid fa-download"></i>Download</Button>
                    </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                    
                    </div>
                  </div>
                </div>
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
