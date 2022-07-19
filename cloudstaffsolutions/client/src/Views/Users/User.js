import React from "react";
import Select from 'react-select'
import { Form, Alert, Row, Col, Container } from 'react-bootstrap';
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './user.css'

function User() {
    return (
        <main className="main_user">

            <NavigationTop />

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
                                        <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Credential Status Override</Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Name:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>User Login:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Email:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="email"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Main Phone:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Mobille Phone:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="text"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Password:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="password"  className="w-75" />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Retype Password:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type="password"  className="w-75" />
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
                                                <div className='py-1 px-2 left w-75'>
                                                <Select className="w-100">
                                                    </Select>
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

export default User;
