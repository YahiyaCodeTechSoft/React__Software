import React from "react";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from './Home/home.jsx'
import Dashboard from './Dashboard/dashboard'
// import UserProfile from './UserProfile/index'
import Navigation from '../Containers/Header/Header'
import { Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./view.css"
// import "bootstrap"


function View() {
  return (

    <div className="view bg-light">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex gap-2"><Navigation />
              {/* <Router >
                <Routes>
                <Route exact path="/" component={Home} />
                </Routes>
              </Router> */}
              <Home />
              {/* <Dashboard /> */}
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default View;
