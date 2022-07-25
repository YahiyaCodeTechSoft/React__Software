import React, { useState } from "react";
import { Navbar, ListGroup, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/CTSLogo.png"
import { sidebarData } from './sidebarData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {

  const [open, setOpen] = useState(false)

  return (


    <Navbar bg="light " className="navbar_ d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' className="list" >
        {sidebarData.map((item, index) => {
          return (
            <ListGroup.Item as='li' key={index} className={open ? "open" : ""}>
              <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen(!open); }}>
                <NavLink to={item.path}> <i className={`fa-solid ${item.icon}`}></i> <span> {item.heading}  </span> </NavLink>
                {/* <div className="nestedList ">
                  <ListGroup as='ul' className="list_ d-none">
                    <ListGroup.Item as='li'><NavLink to={item.innerchild[0].innerpath}> <i class={`fa-solid ${item.innerchild[0].innericon}`}></i> <span> {item.innerchild[0].innerheading} </span> </NavLink></ListGroup.Item>
                  </ListGroup>
                </div> */}
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>


    </Navbar>
    // </main>
  );
}

export default Navigation;
