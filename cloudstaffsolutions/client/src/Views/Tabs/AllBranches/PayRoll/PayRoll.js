import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./PayRoll.css"

function PayRoll() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="payRoll_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Payroll</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style = {{fontSize: '10px'}}>Check Process Method:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option>Single Check Processing</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>EFT Process Method:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option disabled>Single Check Processing</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>Use Separate Check Batches:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Check type="checkbox" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>Next Check Number:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                    <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>Week Begins:</Form.Label>
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

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style = {{fontSize: '10px'}}>Default Payroll Company:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Default Payroll Departments:</Form.Label>

                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Nursing</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Enable Registrant W4:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check type = "checkbox"/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Enable Registrant 1099:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                    <Form.Check type = "checkbox"/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Allow W4 and 1099:</Form.Label>

                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                    <Form.Check type = "checkbox"/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Enable Advance Pay:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                    <Form.Check type = "checkbox"/>
                    </div>
                  </div>
                  </div>
                

                  <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Overtime Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Standard</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                

                  <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>OnCall Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                      <Form.Check type = "checkbox"/>
                      <p>Include in overtime calculation</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Positive Pay export</Form.Label>
                  <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px'}}>Exclude Branch from exports:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                        <div className="div__whole__div">
                      <Form.Check type = "checkbox"/>
                      <p>Format:</p>
                      <Form.Select>
                        <option>J.P Morgan</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={6}>
        <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Order Entry</Form.Label>

                <div className="inner_ d-flex">
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_schedule">
                      <Form.Check type="checkbox" />
                      <p style = {{fontSize: '11px'}}>Enable selection of secondary disciplines and specialities when adding orders</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Form.Label className="text-lighter">
                <div className="inner_ d-flex">
                  <div className="right w-50">
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Button className="lookup_button">Lookup</Button>
                    </div>
                  </div>
                </div>


                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style = {{fontSize: '10px'}}>Location Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option disabled></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>Munciplaity:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option disabled></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label  style = {{fontSize: '10px'}}>School District:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option disabled></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                </Form.Label>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Remittance Information</Form.Label>
                <div className="inner_">
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ height: '100px' }}
                    />
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Wisely Batch Processing</Form.Label>
                  <div className="inner_ d-flex">
                  <div className="right w-50">
                  <Form.Label style = {{fontSize: '10px', whiteSpace: 'nowrap'}}>Use Separate Batches:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                        <div className="div__whole__div">
                      <Form.Check type = "checkbox"/>
                     
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
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
                  PayRoll Accounts
                </Form.Label> 

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label style = {{display: 'contents'}}></Form.Label>
                     <br/>
                    <Form.Label>OT:</Form.Label>
                    <Form.Label className="py-4">OT:</Form.Label>
                    <Form.Label className="py-2">OT:</Form.Label>
                  </div>
                  
                  <div className="py-1 px-2 left">
                    <div className="w-20 py-2">
                      <Form.Label style = {{fontSize: '9px'}}>GL Accounts</Form.Label>
                      <Form.Control  type="text" />
                      <br />
                      <Form.Control type="text" />
                      <br />
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-20 py-2">
                    <Form.Label style = {{fontSize: '9px'}}>Bank Routing</Form.Label>
                      <Form.Control type="text" />
                      <br/>
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-20 py-2">
                    <Form.Label style = {{fontSize: '9px'}}>Bank Accounts</Form.Label>
                    <Form.Control type="text" />
                      <br/>
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-20 py-2">
                    <Form.Label style = {{fontSize: '9px'}}>Bank Name</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                      <br />
                    <Form.Control as="textarea" rows={3} />
                  </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                  </div>
                  <div className="py-1 px-2 left" >
                    <div className="w-20 py-2">
                    <Form.Label style = {{fontSize: '9px'}}>Bank Number</Form.Label>
                    <Form.Control type="text" />
                      <br/>
                    <Form.Control type="text" />
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

export default PayRoll;
