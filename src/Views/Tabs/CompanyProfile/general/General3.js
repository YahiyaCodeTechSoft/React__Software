import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './general3.css'


function General3() {
    return (
        <Container fluid>
            <Row>
                <Col md={6} >
                    <Form className='general_form3'>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Agency Name</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="AMT Medical Staffing, Inc." />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Last Closed</Form.Label>
                                <div className='py-1 px-2'>
                                    <p>Sharron Woods Closed Week:06/04/2022</p>
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>(Reply To) Email address</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="" />
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Default Discipline</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Default :</Form.Label>
                                    <div className='py-1 px-2 w-50'>
                                        <Form.Select >
                                            <option></option>
                                            <option>Disabled select</option>
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form overtime'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Overtime Warning</Form.Label>
                                <div className='py-1 px-2 '>
                                <Form.Check className='d-flex align-items-center' type="checkbox" checked label="Display warning if booking registrant into overtime" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Double Book Tolerance</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    <div className='py-1 px-2 w-25 d-flex'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                <Form.Label>(minutes)</Form.Label>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form policy'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Password ploicy</Form.Label>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                             
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label>
                            </Form.Group>
                        </div>
                    </Form>
                </Col>
                <Col md={6} >
                    <Form className='general_form3'>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Agency Name</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="AMT Medical Staffing, Inc." />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Last Closed</Form.Label>
                                <div className='py-1 px-2'>
                                    <p>Sharron Woods Closed Week:06/04/2022</p>
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>(Reply To) Email address</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="" />
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Default Discipline</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Default :</Form.Label>
                                    <div className='py-1 px-2 w-50'>
                                        <Form.Select >
                                            <option></option>
                                            <option>Disabled select</option>
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form overtime'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Overtime Warning</Form.Label>
                                <div className='py-1 px-2 '>
                                <Form.Check className='d-flex align-items-center' type="checkbox" checked label="Display warning if booking registrant into overtime" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Double Book Tolerance</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    <div className='py-1 px-2 w-25 d-flex'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                <Form.Label>(minutes)</Form.Label>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form policy'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Password ploicy</Form.Label>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                             
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                    <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>
                                <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label>
                            </Form.Group>
                        </div>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}

export default General3;