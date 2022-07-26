import React, { useState } from "react";
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Client.css";

function Client() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
      <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Week Paramters
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '10px', whiteSpace: 'nowrap'}}>Week Start Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%", whiteSpace: 'nowrap' }}>
                    <Form.Label style = {{fontSize: '10px'}}>Overtime Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock"}}
                      >
                        <option>Standard 40</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'12px'}}>Oncall Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style = {{display: 'flex'}}>
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                      <p style = {{margin: '2px'}}>Overtime Collection</p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%", whiteSpace: 'nowrap' }}>
                    <Form.Label style = {{fontSize: '10px'}}>Overtime Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock"}}
                      >
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
        </Col>

        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Week Paramters
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '10px', whiteSpace: 'nowrap'}}>Week Start Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '8px', whiteSpace: 'nowrap'}}>Weekend Start Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '8px', whiteSpace: 'nowrap'}}>Weekend End Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}
                  >
                    Splits
                  </Form.Label>
                  <div className="py-1 px-2">
                      <div style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div className="div_1" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox"/>
                          <p style = {{fontSize: '9px'}}>Split Shifts</p>
                        </div>
                        <div className="div_2" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox"/>
                          <p style = {{fontSize: '9px'}}>Split Weekends</p>
                        </div>
                        <div className = "div_3" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox"/>
                          <p style = {{fontSize: '9px'}}>Split Holidays</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Form.Group>
                
              </Form.Group>
            </div>
          </Form>
        </Col>
    

      </Row>

      

      <Row>
        <Col md = {12}>
        <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
              <Form.Label className="m-0 pb-1">
                  Pay Modifiers Clients Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>OT:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                  </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Bill Modifiers Clients Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>OT:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                  </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                    </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Faculty Cancel Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                      hours
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                      hours
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Agency Cancel Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                      hours
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                      <p>+</p>
                      $<Form.Control type="text" />
                      hours
                    </div>
                  </div>
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

export default Client;
