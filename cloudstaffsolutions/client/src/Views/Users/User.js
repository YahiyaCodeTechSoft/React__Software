import React from "react";
import Select from 'react-select'
import { Form, Alert, Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './user.css'

function User() {

    var UserSelect = [
        {
            value: 1,
            label: 'Biller',
        },
        {
            value: 2,
            label: ' ,Collector',
        },
        {
            value: 3,
            label: ' ,convertor',
        },
    ]

    return (
        <main className="main_user">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>
                <div className="w-75 m-auto">
                    <Alert className="text-center m-0 alertt">
                        User Details
                    </Alert>
                    <Container fluid className="user_form">
                        <Row>
                            <Col lg={6} >
                                <Form className='user_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>User Account Information</Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Name:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Login:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Email:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="email" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Main Phone:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Mobille Phone:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Password:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="password" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Retype Password:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="password" className="w-75" />
                                                </div>
                                            </div>


                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Status:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-25">
                                                        <option>Active</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Type:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 mb-2'>

                                                    {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                                                    <Form.Select className="w-100 align-items-start" style={{ height: '40px' }}>
                                                        <option>Biller, Collector</option>
                                                        <option>Biller</option>
                                                        <option>Collector</option>
                                                    </Form.Select>
                                                </div>
                                            </div>



                                        </Form.Group>
                                    </div>

                                   

                                    <div className='tab_form override my-0'>
                                        <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Security</Form.Label>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Security Group:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>

                                                    {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                                                    <Form.Select className="w-100 align-items-start" style={{ height: '40px' }}>
                                                        <option></option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>System Access:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>

                                                    {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                                                    <Form.Select className="w-100 align-items-start" style={{ height: '40px' }}>
                                                        <option>Staffing, Accounting</option>
                                                        <option>Staffing</option>
                                                        <option>Accounting</option>
                                                    </Form.Select>
                                                </div>
                                            </div>







                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>

                            <Col lg={6} >
                                <Form className='user_form2'>

                                    <div className='tab_form override'>
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Home Branch</Form.Label>



                                            <div className='inner_'>
                                                <div className='py-2 px-2 w-100'>
                                                    <Form.Select className="w-75">
                                                        <option></option>
                                                    </Form.Select>
                                                </div>
                                            </div>





                                        </Form.Group>
                                    </div>

                                    <div className='tab_form override my-0'>
                                        <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Region/Branch Lock Selection</Form.Label>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label className="d-none">Security Group:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 overtime'>
                                                    <Form.Check className='d-flex align-items-center w-100 ps-0' type="checkbox" label="All Regions And Branches " />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Regions:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-100 align-items-start" style={{ height: '40px' }}>
                                                        <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                                                        <option>BIRMINGhAM</option>
                                                        <option>HUSTVILLE</option>
                                                        <option>MOBILE</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Branches:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>

                                                    {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                                                    <Form.Select className="w-100 align-items-start" style={{ height: '40px' }}>
                                                        <option>Staffing, Accounting</option>
                                                        <option>Staffing</option>
                                                        <option>Accounting</option>
                                                    </Form.Select>
                                                </div>
                                            </div>







                                        </Form.Group>
                                    </div>

                                    <div className='tab_form override my-0'>
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Time Zone Information</Form.Label>



                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>TimeZone:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-75">
                                                        <option>(GmT -6:00 hours) Central Time (US & Canada), Mexico City</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex '>
                                                <div className='right w-25'>
                                                    <Form.Label>DST:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 overtime'>
                                                    <Form.Check className='d-flex align-items-center w-100 ps-0' type="checkbox" label="Automatically adjust time for Daylight Saving changes" />
                                                </div>
                                            </div>





                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </main>
    );
}

function Navv() {
    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    <Nav.Link href="/user" className='py-1 px-3'><i class="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                    <Nav.Link href="/userProfileTable" className='py-1 px-3'><i class="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default User;
