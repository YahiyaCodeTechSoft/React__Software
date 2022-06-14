import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./UserProfile1.css";
import AuthHeader from '../../Containers/AuthHeader/authHeader'
import Logo from "../../assets/images/logo.png";

function UserProfile1() {
  return (
    <>
          <AuthHeader />

    <main className="main_user1 mt-5">
      <div className="all"></div>

        <div className="login_form ">
          <Alert className="text-center fs-4 m-0   alertt">
            <img src={Logo} style={{ width: '100%' }} />
          </Alert>
          <Form className="form py-3 px-4 ">

            <div className="mt-2 mb-5">

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-2 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>
            <Button className="form_btn mt-2 w-100" type="submit">
              <NavLink to="/view">
                Log In
              </NavLink>

            </Button>
            <div className="message text-center mt-4">
              <p>
                Forgot Password? <NavLink to="/" className="mx-2">
                  Click Here
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      
    </main>
    </>
  );
}

export default UserProfile1;
