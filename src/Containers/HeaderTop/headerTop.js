import React from "react";
import { Navbar,ListGroup, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import {Button} from '@mui/material'
// import {Link} from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {
  return (
    // <main className="header">

    
    <Navbar bg="light " className="navbar_ d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' >
        {/* <ListGroup.Item as='li'><Link to="/"> <i className="fa-solid fa-house-chimney"></i><span> Home </span></Link></ListGroup.Item> */}
        {/* <ListGroup.Item as='li'><Link to="/dashboard"> <i className="fa-solid fa-house-chimney"></i><span> Dashboard </span></Link></ListGroup.Item> */}
        {/* <ListGroup.Item as='li'><Link to="/"> <i className="fa-solid fa-house-chimney"></i><span> Home </span></Link></ListGroup.Item> */}
      <ListGroup.Item as='li'><NavLink to="/view"> <i className="fa-solid fa-house-chimney"></i> <span> Employee  </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to="/view/department"><i className="fa-solid fa-house-chimney"></i> <span> Departments </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to="/view/taxes"><i className="fa-solid fa-house-chimney"></i> <span> Taxes </span> </NavLink></ListGroup.Item>
        {/* <ListGroup.Item as='li'><NavLink to="/view/one"><i className="fa-solid fa-house-chimney"></i> <span> One </span> </NavLink></ListGroup.Item> */}
      </ListGroup>
    </Navbar>
    // </main>
  );
}

export default Navigation;
