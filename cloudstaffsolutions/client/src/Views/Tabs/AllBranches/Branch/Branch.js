import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Branch.css"

function Branch() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Branch Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Branch Status:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                    <Form.Select>
                        <option>Active</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address 1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address 2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                    <div className="w-75">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Phone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                  <div className="w-75">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Fax:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                    <div className="w-75">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">FICA Exempt Pension Plan</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Timezone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option>(GMT - 10:00 hours) Hawaii</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ pro d-flex">
                  <div className="right w-25">
                    <Form.Label>DST:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_imp">
                    <Form.Check type = "checkbox"/>
                    <p>Automatically adjust time for daylight changes</p>
                    </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">US SSN/ Canadian SIN Mask</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Timezone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                    <Form.Select>
                        <option>#####----#####</option>
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

        <Col md={6}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>G/L Account Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Relias Hierarchy</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Hierarchy:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                  <div className="w-100">
                    <Form.Select>
                        <option>(GMT - 10:00 hours) Hawaii</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                      <p>Hierarchy is optional and only applies when the system is set to link to Relias Learners. <br /> <br /> This hierarchy is assigned at the time a new learner is created or updated through the Relias linking process within the registrant credential sub module . Changing this hierarchy will not mass update all existing linked registrants/learners. You would need to update each registrant link individually in the registrant credential sub module or contact Relias to have them mass update learners to the desired hierarchy.</p>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">(Reply To) Email Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-0">
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
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

export default Branch;
