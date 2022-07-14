import React from "react";
import { Navbar, Nav , Form, Button, Container, NavLink} from 'react-bootstrap';
// import { NavLink } from "react-router-dom";
// import {Button} from '@mui/material'
// import {Link} from 'react-router-dom'
// import logo from "../../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './headerTop.css'

function NavigationTop() {
  return (
    <main className="header_top">


      <Navbar expand="lg" className="navbar">
        <Container fluid className="mx-3">
        <Form className="d-flex gap-4 align-items-center">
                <h5>Branches</h5>
                <Form.Select name="empDepartment" className="me-2 m-0 py-0 w-100">
                <option selected>All Regions & Branches</option>
              </Form.Select>
              </Form>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-between w-100">
             
              <Nav
                className="me-auto my-2 my-lg-0 d-flex align-items-center"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              <p className="m-0">Welcome: User (AMT Medical Staffing)</p>
                <Nav.Link href="/dashboard"><i className="fa-solid fa-users"></i>  Dashboard </Nav.Link>
                <Nav.Link href="#action2"><i className="fa-solid fa-users"></i> Prefrence</Nav.Link>
                <Nav.Link href="#action2"><i className="fa-solid fa-users"></i> Support</Nav.Link>
                <Nav.Link href="/"><i className="fa-solid fa-users"></i> Logout</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    

    </main>
  );
}

export default NavigationTop;
