import React from "react";

import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'

function Home() {
  return (

    <div className="home_form m-auto w-50">
      <Alert className="text-center fs-4 m-0   alertt">
        Employee Profile
      </Alert>
      <Form className="form py-3 px-4" >
        <div className="input_group d-flex align-items-center gap-2">
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label >Employee ID</Form.Label>
          <Form.Control type="text" placeholder="Employee ID" className="Empid" />
          {/* <Form.Text className="text-muted ps-2">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" placeholder="Employee Name" className="Empname" />
        </Form.Group>
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Employee Identity</Form.Label>
          <Form.Control type="text" placeholder="Employee Identity" className="Empidentity" />
        </Form.Group>
        </div>


        <Form.Group className="mb-2 input_  " controlId="formBasicEmail">
          <Form.Label>Employee Department</Form.Label>
          <Form.Select>
            <option selected>Employee Department</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </Form.Select>
        </Form.Group>



        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Employee Designation</Form.Label>
          <Form.Control type="text" placeholder="Employee Designation" className="Empdesignation" />
        </Form.Group>

        <div className="input_group d-flex gap-2">
        
        

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Contact Number" className="ContactNum" />
        </Form.Group>
        </div>

        <div className="input_group d-flex gap-2">
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Emergency Contact Person</Form.Label>
          <Form.Control type="text" placeholder="Emergency Contact Person" className="Emergcontactperson" />
        </Form.Group>


        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Emergency Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Emergency Contact Number" className="Emergcontactnumber" />
        </Form.Group>
        </div>

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Employee Adress</Form.Label>
          <Form.Control type="text" placeholder="Employee Adress" className="Empadress" />
        </Form.Group>

        <div className="input_group d-flex gap-2">
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Employee Salary</Form.Label>
          <Form.Control type="text" placeholder="Employee Salary" className="Empsalary" />
        </Form.Group>
        

        {/* Checkbox */}

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Yearly Salary</Form.Label>
          <Form.Control type="text" placeholder="Yearly Salary" className="Yearsalary" />
        </Form.Group>
        </div>

        <div className="input_group d-flex gap-2">
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>TaxSlab (TaxID)</Form.Label>
          <Form.Control type="text" placeholder="TaxSlab (TaxID)" className="Taxslab" />
        </Form.Group>

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Tax Percentage</Form.Label>
          <Form.Control type="text" placeholder="Tax Percentage" className="Taxpercentage" />
        </Form.Group>
          </div>

          <div className="input_group d-flex gap-2">
        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Tax Amount</Form.Label>
          <Form.Control type="text" placeholder="Tax Amount" className="Taxamount" />
        </Form.Group>

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Leave In Cashment</Form.Label>
          <Form.Control type="text" placeholder="Leave In Cashment" className="Leaveincashment" />
        </Form.Group>
        </div>




        <Button className="form_btn mt-2 w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Home;
