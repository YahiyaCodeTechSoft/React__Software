import React from "react";
import { Navbar,ListGroup, } from 'react-bootstrap';
// import {Button} from '@mui/material'
import logo from "../../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {
  return (
    <Navbar bg="light " className="navbar d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' >
        <ListGroup.Item as='li'><i class="fa-solid fa-house-chimney"></i><span> Cras justo odio </span></ListGroup.Item>
        <ListGroup.Item as='li'><i class="fa-solid fa-house-chimney"></i> <span> Cras justo odio </span></ListGroup.Item>
        <ListGroup.Item as='li'><i class="fa-solid fa-house-chimney"></i> <span> Cras justo odio </span></ListGroup.Item>
        <ListGroup.Item as='li'><i class="fa-solid fa-house-chimney"></i> <span> Cras justo odio </span></ListGroup.Item>
        <ListGroup.Item as='li'><i class="fa-solid fa-house-chimney"></i> <span> Cras justo odio </span></ListGroup.Item>
      </ListGroup>
    </Navbar>
  );
}

export default Navigation;
