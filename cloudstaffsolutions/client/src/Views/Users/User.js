import React from "react";
import { Form, Button, Alert, Row, Col, ButtonGroup } from 'react-bootstrap';
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './user.css'

function User() {
    return (
        <main className="main_user">

            <NavigationTop />

            <div className='cennt mt-5'>
                <div className="user_form m-auto w-50">
                    <Alert className="text-center fs-4 m-0   alertt">
                        Users
                    </Alert>
                    <Row>

                        <Col md={12}>
                            <Form className="form py-3 px-2 w-75 m-auto ">
                                {/* <div className="input_group d-flex align-items-center justify-content-between gap-2"> */}
                                <Form.Group className="mb-2 name" controlId="formBasicEmail">
                                    <Form.Label >Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-2 email" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-2  password" controlId="formBasicEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Password" />
                                </Form.Group>
                                {/* </div> */}





                                <Button className="form_btn mt-2 w-100" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md={12}>
                            <div className="showList py-3 px-3">
                                <div className="head">
                                    <h5>Users</h5>
                                </div>

                                <div className="body">
                                    <ul className="list">
                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>

                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>

                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>

                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>

                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>

                                        <li className="d-flex gap-4 align-items-end">

                                            <div className="img">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt='profile' />
                                            </div>
                                            <div className="text d-flex align-items-center justify-content-between">
                                                <p className="m-0">User1</p>
                                                <span className="m-0">user@gmail.com</span>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary" className="m-2 me-0">Edit</Button>
                                                    <Button variant="secondary" className="m-2 mx-0">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </li>



                                    </ul>


                                </div>

                            </div>
                        </Col>



                    </Row>
                </div>
            </div>
        </main>
    );
}

export default User;
