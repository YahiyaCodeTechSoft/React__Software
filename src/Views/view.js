import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from './EmployeeProfile/employeeProfile'
import Department from './Departments/department'
import Taxes from "./Taxes/taxes";
// import UserProfile from './UserProfile/index'
import Navigation from '../Containers/Header/Header'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./view.css"
// import "bootstrap"


function View() {
  return (

    <div className="view bg-light">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex"><Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/department" element={<Department />} />
              <Route path="/taxes" element={<Taxes />} />
            </Routes>
            {/* <Home /> */}
            {/* <Dashboard /> */}
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default View;
