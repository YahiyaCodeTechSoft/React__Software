import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './taxes.css'

function Taxes() {
  return (
    <main className="main_taxes">
      <div className="taxes_form m-auto w-50">
        <Alert className="text-center fs-4 m-0   alertt">
          Taxes
        </Alert>
        <Form className="form py-3 px-4" >
          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 taxid" controlId="formBasicEmail">
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
            <Form.Group className="mb-2 extraAmount" controlId="formBasicEmail">
              <Form.Label>Extra Amount</Form.Label>
              <Form.Control type="text" placeholder="Extra Amount" className="" />
            </Form.Group>
          </div>



          <div className="input_group d-flex align-items-center justify-content-between  gap-2">
            <Form.Group className="mb-2 minimum" controlId="formBasicEmail">
              <Form.Label>Minimum</Form.Label>
              <Form.Control type="text" placeholder="Minimum"  />
            </Form.Group>


            <Form.Group className="mb-2 maximum" controlId="formBasicEmail">
              <Form.Label>Maximum</Form.Label>
              <Form.Control type="text" placeholder="Maximum"  />
            </Form.Group>
           
          </div>




          <Button className="form_btn mt-2 w-100" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default Taxes;
