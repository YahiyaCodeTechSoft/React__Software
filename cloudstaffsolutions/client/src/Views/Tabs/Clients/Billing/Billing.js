import React, { useState } from "react";
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Billing.css";

function Billing() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Billing Information
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Bill By:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        style={{ display: "inlineBlock", width: "60%" }}
                      >
                        <option>C</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                {/* Discount */}

                {/* <div className='inner_ d-flex align-items-center'>
                  <div className='right'>
                    <Form.Label>Discount:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='div_billing'>
                    <div className='w-75'>
                      <Form.Control type="text" style = {{width: '25%'}} />
                      <p>%</p>
                    </div>
                    <div className='second_billing'>
                      <Form.Label>Type:</Form.Label>
                      <Form.Select style = {{width: '20%'}}>
                        <option>C</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                    </div>
                  </div>
                </div> */}

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Consolidated:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label
                      style={{ whiteSpace: "nowrap", fontSize: "10px" }}
                    >
                      TimeCard Images:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select>
                        <option>Req. as Pay</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>


              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Registrant TimeSheets
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'10px'}}>TimeSheets Enabled:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize: '10px'}}>Require Verifications:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col lg = {6}>
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

                <div className="inr_ d-flex">
                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'12px', borderTop: 'none'}}>Accepts OT:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style = {{display: 'flex'}}>
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                    </div>
                  </div>

                  <div className="right" style={{ width: "40%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'12px', borderTop: 'none'}}>Time Rounding:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style = {{display: 'flex'}}>
                    <Form.Select
                        style={{ display: "inlineBlock"}}
                      >
                        <option>Q</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
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
                  Pay Modifiers
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
                  Bill Modifiers
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
                  Faculty Cancel
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

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Agency Cancel
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

        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Credit Card
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Type:</Form.Label>
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

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Method:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Control
                        style={{ display: "inlineBlock" }}
                        type = "text"
                      >
                       
                      </Form.Control>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Terms:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="div_selectors" style = {{display: 'flex'}}>
                      <Form.Select
                        style={{ display: "inlineBlock" , width: '50%'}}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                      <Form.Select
                        style={{ display: "inlineBlock", width: '40%' }}
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
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{fontSize: '11px'}}>Cardholder Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Control
                        style={{ display: "inlineBlock" }}
                        type = "text"
                      >
                       
                      </Form.Control>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{fontSize: '11px', whiteSpace: 'nowrap'}}>Charge Increment:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="whole1_div" style = {{display:'flex'}}>
                      <Form.Control
                        style={{ display: "inlineBlock" }}
                        type = "text"
                      >
                       
                      </Form.Control>
                      <div className="right_div" style = {{display: 'flex', alignItems: 'center'}}>
                      <Form.Check style = {{alignItems: 'center'}}
                      type = "checkbox"/>
                      <p style = {{fontSize: '8px', whiteSpace: 'nowrap'}}>Change when invoiced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Taxes
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Sales Tax:</Form.Label>
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
      </Row>

      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Payment
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Payor:</Form.Label>
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

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Method:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock" }}
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
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Terms:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock" }}
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
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'8px'}}>TimeSheets Enabled:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'10px'}}>Rate:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style = {{display: 'flex'}}>
                      <Form.Control style = {{width: '30%'}}
                        className="d-flex align-items-center gap-2 p-0"
                        type="text"
                      />
                      <p>%/Year</p>
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

export default Billing;
