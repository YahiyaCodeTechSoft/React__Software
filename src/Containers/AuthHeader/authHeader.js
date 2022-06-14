import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './authHeader.css'

function AuthHeader() {
    return (
        <Navbar className="auth_navbar fixed-top bg-light">
            <Container fluid className="mx-2 ">
                <Nav className="gap-4 m-auto">
                    <Nav.Link href="/">Form 1</Nav.Link>
                    <Nav.Link href="/user1">Form 2</Nav.Link>
                    <Nav.Link href="/user2">Form 3</Nav.Link>
                    <Nav.Link href="/user3">Form 4</Nav.Link>
                    <Nav.Link href="/user4">Form 5</Nav.Link>
                    <Nav.Link href="/view">Dashboard</Nav.Link>
                </Nav>
                {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
            </Container>
        </Navbar>
    );
}

export default AuthHeader;