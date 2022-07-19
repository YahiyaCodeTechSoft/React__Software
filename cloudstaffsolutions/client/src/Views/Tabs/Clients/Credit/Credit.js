import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Credit.css";

function Credit() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Balances</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                        paddingBottom: "1px",
                      }}
                    >
                      Current Balance:
                    </Form.Label>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Open Credit:
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoicing</Form.Label>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    ></Form.Label>
                  </div>

                  <div
                    className="short_div"
                    style={{
                      display: "flex",
                      borderBottom: "1px solid lightgray",
                      width: "60%",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="left_div">
                      <p>MTD</p>
                    </div>

                    <div className="right_div">
                      <p>STD</p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Current Balance:
                    </Form.Label>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Open Credit:
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        {/* Right Columns */}
        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Balances</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                        paddingBottom: "1px",
                      }}
                    >
                      Current Balance:
                    </Form.Label>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Open Credit:
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Payments</Form.Label>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    ></Form.Label>
                  </div>

                  <div
                    className="short_div"
                    style={{
                      display: "flex",
                      borderBottom: "1px solid lightgray",
                      width: "60%",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="left_div">
                      <p>MTD</p>
                    </div>

                    <div className="right_div">
                      <p>STD</p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Current Balance:
                    </Form.Label>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label
                      style={{
                        fontSize: "9px",
                        width: "40%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Open Credit:
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Credit</Form.Label>

                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "10%", display: "contents" }}
                  >
                    <div
                      className="w-100"
                      style={{
                        display: "block",
                        borderRight: "1px solid darkgray",
                      }}
                    >
                      <Form.Label
                        style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        Week Start Time:
                      </Form.Label>
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

                    <div className="right" style={{ width: "25%" }}>
                      <Form.Label>Day:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "37%", whiteSpace: "nowrap" }}
                  >
                    <Form.Label style={{ fontSize: "10px" }}>
                      Decline Reason:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock", width: "70%" }}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%" }}>
                    <Form.Label style={{ fontSize: "11px" }}>
                      Pre-Approved:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Control style={{ width: "40%" }} type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "37%", whiteSpace: "nowrap" }}
                  >
                    <Form.Label style={{ fontSize: "10px" }}>Score:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock", width: "40%" }}
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
        <Form className="general_form2">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Printing Options</Form.Label>
                <div className="inner_ d-flex align-items-center">
                <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                  <div className="right">
                    <Form.Label style = {{whiteSpace: 'nowrap', position: 'relative', right: '116px', fontSize: '8px', top: '10px'}}>Warn if approaching credit limit within:</Form.Label>
                    <Form.Control style = {{position: 'relative', top: '-12px', width: '60%', right: '-40px'}} type = "text"></Form.Control>
                  </div>
                  
                </div>

                <div className="inner_ d-flex align-items-center">
                <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                  <div className="right">
                  <Form.Label style = {{whiteSpace: 'nowrap', position: 'relative', right: '154px', fontSize: '8px', top: '10px'}}>Suspend Scheduling if credit exceeds the limit by:</Form.Label>
                    <Form.Control style = {{position: 'relative', top: '-12px', width: '60%', right: '-40px'}} type = "text"></Form.Control>
                  </div>
                  
                </div>

                <div className="inner_ d-flex align-items-center">
                <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                  <div className="right">
                  <Form.Label style = {{whiteSpace: 'nowrap', position: 'relative', right: '78px', fontSize: '8px', top: '10px'}}>Limit Weekly Scheduling to:</Form.Label>
                    <Form.Control style = {{position: 'relative', top: '-12px', width: '60%', right: '-40px'}} type = "text"></Form.Control>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                <div className="py-1 px-2 left">
                    
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                  <div className="right">
                  <Form.Label style = {{ position: 'relative', right: '235px', fontSize: '8px', top: '10px'}}>Reason:</Form.Label>
                  <Form.Select
                        style={{ position: 'relative',
                          width: '188%',
                          top: '-13px',
                          right: '113px'}}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Workers Comp</Form.Label>


                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "45%", whiteSpace: "nowrap" }}
                  >
                    <Form.Label style={{ fontSize: "10px" }}>
                      Default Reason W/C Code:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock", width: "70%" }}
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
      </Row>
    </Container>
  );
}

export default Credit;
