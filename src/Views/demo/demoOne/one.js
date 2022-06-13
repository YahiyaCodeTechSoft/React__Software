import React from "react";

import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './one.css'

function One() {
  return (
    <main className="main_one">
      <div className="one_form w-50">
        <Alert className="text-center fs-4 m-0   alertt">
          One
        </Alert>
        <Form className="form py-3 px-4" >
          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Empid" controlId="formBasicEmail">
              <Form.Label >Tax ID</Form.Label>
              <Form.Control type="text" placeholder="Tax ID" />
              {/* <Form.Text className="text-muted ps-2">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-2 taxdescription" controlId="formBasicEmail">
              <Form.Label>Tax Description</Form.Label>
              <Form.Control type="text" placeholder="Tax Description" />
            </Form.Group>
            <Form.Group className="mb-2  taxslab" controlId="formBasicEmail">
              <Form.Label>Tax Slab</Form.Label>
              <Form.Control type="text" placeholder="Tax Slab" />
            </Form.Group>
            <Form.Group className="mb-2 ContactNum" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" className="" />
            </Form.Group>
          </div>

          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Empdepartment" controlId="formBasicEmail">
              <Form.Label>Employee Department</Form.Label>
              <Form.Select>
                <option selected>Employee Department</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2 Empdesignation" controlId="formBasicEmail">
              <Form.Label>Employee Designation</Form.Label>
              <Form.Control type="text" placeholder="Employee Designation" className="" />
            </Form.Group>

          </div>
          <div className="input_group d-flex align-items-center justify-content-between  gap-2">
            <Form.Group className="mb-2 Emergcontactperson" controlId="formBasicEmail">
              <Form.Label>Emergency Contact Person</Form.Label>
              <Form.Control type="text" placeholder="Emergency Contact Person" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Emergcontactnumber" controlId="formBasicEmail">
              <Form.Label>Emergency Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Emergency Contact Number" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Empsalary" controlId="formBasicEmail">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control type="text" placeholder="Employee Salary" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Yearsalary" controlId="formBasicEmail">
              <Form.Label>Yearly Salary</Form.Label>
              <Form.Control type="text" placeholder="Yearly Salary" className="" />
            </Form.Group>
          </div>

          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label>Employee Adress</Form.Label>
            <Form.Control type="text" placeholder="Employee Adress" className="Empadress" />
          </Form.Group>

          {/* <div className="input_group d-flex  gap-2"> */}



          {/* Checkbox */}


          {/* </div> */}

          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Taxslab" controlId="formBasicEmail">
              <Form.Label>TaxSlab (TaxID)</Form.Label>
              <Form.Control type="text" placeholder="TaxSlab (TaxID)" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Taxpercentage" controlId="formBasicEmail">
              <Form.Label>Tax Percentage</Form.Label>
              <Form.Control type="text" placeholder="Tax Percentage" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Taxamount" controlId="formBasicEmail">
              <Form.Label>Tax Amount</Form.Label>
              <Form.Control type="text" placeholder="Tax Amount" className="" />
            </Form.Group>

            <Form.Group className="mb-2 Leaveincashment" controlId="formBasicEmail">
              <Form.Label>Leave In Cashment</Form.Label>
              <Form.Control type="text" placeholder="Leave In Cashment" className="" />
            </Form.Group>
          </div>

          <div className="input_group d-flex gap-2">


          </div>




          <Button className="form_btn mt-2 w-100" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default One;