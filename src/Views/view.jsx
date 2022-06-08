import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from './Home/index'
import Dashboard from './Dashboard/index'
import UserProfile from './UserProfile/index'
import Navigation from '../Containers/Header/Header'
import { Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap"


function View() {
  return (

    <section className="view bg-light">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex"><Navigation />
            <BrowserRouter >
              <Routes path="/" element={<></>}>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/userprofile" element={<UserProfile />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
      {/* <div className="row">
        <div className="col">
        <Navbar />
        </div>
        <div className="col">
        <BrowserRouter >
            <Routes path="/" element={<></>}>
              <Route path="/" element={<Home />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div> */}

    </section>

  );
}

export default View;
