import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./CheckLayout.css";

function CheckLayout() {
  return (
    <Container fluid>
      <Row>
        <Col md = {12}>
        <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Check:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div style={{ borderRight: '1px solid darkgray'}}>
                    <Form.Label>Top Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Bottom Margin:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Height:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Width:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div style={{ borderRight: '1px solid darkgray'}}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Bottom Margin:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Height:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div style = {{borderRight:'1px solid darkgray'}}>
                    <Form.Label>Width:</Form.Label>
                    </div>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                </div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Date:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Dollar Amount:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Word Amount:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Address:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>EFT/Direct Pay Amount:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Top:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Signature:</Form.Label>
                  </div>
                  <div className="left ">
                    <div className="w-100">

                    <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>left:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Bottom Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                      <Form.Control type="text" />
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Height:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" />
                    </div>
                  </div>
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
      </Row>     
    </Container>
  );
}

export default CheckLayout;
