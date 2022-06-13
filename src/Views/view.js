import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from './EmployeeProfile/employeeProfile'
import Department from './Departments/department'
import Taxes from "./Taxes/taxes";
import One from "./demo/demoOne/one.js"
import Navigation from '../Containers/Header/Header'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./view.css"
// import "bootstrap"


function View() {

  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex"><Navigation />
            {/* <Routes>
              <Route exact  path="/view" element={<Home />} />
              <Route  path="/view/department" element={<Department />} />
              <Route  path="/view/taxes" element={<Taxes />} />
              <Route  path="/view/one" element={<One />} />
            </Routes> */}
            <Home />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default View;
