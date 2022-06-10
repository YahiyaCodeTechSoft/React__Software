import React from "react";
// import Home from '../Home/index'
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './department.css'

function Department() {
  return (
    <main className="main_department">
    <div className="form_department m-auto ">
      <Alert className="text-center fs-4 m-0   alertt">
        Departments
      </Alert>
      <Form className="form py-3 px-4" >
        <div className="input_group d-flex gap-2">
          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label >Deptart ID</Form.Label>
            <Form.Control type="text" placeholder="Deptart ID" className="Deptid" />
          </Form.Group>
          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label>Deptart Head</Form.Label>
            <Form.Control type="text" placeholder="Deptart Head" className="Depthead" />
          </Form.Group>
        </div>

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Deptart Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Deptart Description"
            rows={5}
          />
        </Form.Group>



        <Button className="form_btn mt-2 w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </main>

  );
}

export default Department;
