import React, { useState } from "react";
import { Navbar, ListGroup, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/CTS_copyLogo.png"
import logo from "../../assets/images/CTSLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {

  const [open, setOpen] = useState(false)

  return (
    // <main className="header">


    <Navbar bg="light " className="navbar_ d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' className="list">
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"> <i className="fa-solid fa-user"></i> <span> Scheduling  </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/clientTable"><i className="fa-solid fa-user"></i> <span> Clients </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Registry </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Intouch </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Rates </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Timecards </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Payroll </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Work History </span> </NavLink>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Billing </span> </NavLink>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-user"></i> <span> Timecards </span> </NavLink>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item as='li' className={open ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen(!open); }}>
            <NavLink to="#"><i className="fa-solid fa-user"></i> <span> Admin  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              <ListGroup.Item as='li'><NavLink to="/companyProfile"> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item>
              {/* <ListGroup.Item as='li'><NavLink to="/clients"> <i className="fa-solid fa-user"></i> <span> Clients </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Branches </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Regions </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Security Groups </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/userProfileTable"> <i className="fa-solid fa-chevron-right"></i> <span> Users </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Burden Groups </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Credentials </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Disciplines </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Drop Down Codes </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Earning Deducation Codes </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Email History </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> G/L Accounts </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Holidays </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Intouch Templates </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Invoice Formats </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Invoice Profile </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Mailing Lables </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Notification Templates </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-chevron-right"></i> <span> Online Application </span> </NavLink></ListGroup.Item>
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Navbar>
    // </main>
  );
}

export default Navigation;
