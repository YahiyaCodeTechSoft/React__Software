import React from 'react'
import { Form, Alert, Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './paidleave.css'

function PaidLeave() {
    return (
        <main className="main_paid">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>
                <div className="w-75 m-auto">
                    <Alert className="text-center m-0 alertt">
                        Paid Leave Policy Details
                    </Alert>
                    <Container fluid className="paid_form">
                        <Row>
                            <Col lg={12} >
                                <Form className='paid_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className="mb-2 tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Holiday Information</Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Name:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Type:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-3'>
                                                    <Form.Check className='d-flex align-items-center ' type="checkbox" label="Nth Day of Month" />
                                                    <Form.Check className='d-flex align-items-center ' type="checkbox" label="Yearly on Same Day" />
                                                    <Form.Check className='d-flex align-items-center ' type="checkbox" label="One Time Only" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Occurs On:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-3'>
                                                    <Form.Select className="w-25">
                                                        <option>First</option>
                                                    </Form.Select>
                                                    <div  className="w-25 d-flex gap-2 ">
                                                    <span>Days:</span>
                                                        <Form.Select>
                                                            <option>Monday</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="w-25 d-flex gap-2">
                                                    <Form.Label>Of:</Form.Label>
                                                        <Form.Select >
                                                            <option>January</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Start Time:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-25" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Duration:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text" className="w-25" />
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
    )
}

function Navv() {
    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    {/* <Nav.Link href="/user" className='py-1 px-3'><i class="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
                    <Nav.Link href="/paidLeaveTable" className='py-1 px-3'><i class="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                    <Nav.Link href="/paidLeaveTable" className='py-1 px-3'><i class="fa-solid fa-xmark"></i> cancel</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default PaidLeave