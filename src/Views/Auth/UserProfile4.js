import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./UserProfile4.css";
import AuthHeader from '../../Containers/AuthHeader/authHeader'
// import Logo from "../../assets/images/logo.png";

function UserProfile4() {
  return (
    <>
    <AuthHeader />
    
    <main className="main_user4">
      <div className="login_form3  ">
      <Alert className="text-center fs-4 m-0   alertt">
            LOGIN
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
            Forgot Password? <NavLink to="/user4" className="mx-2">
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

export default UserProfile4;
