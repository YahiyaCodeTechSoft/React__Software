import React from 'react';
import { Tab, Tabs} from 'react-bootstrap';
// import General from './general/General'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyProfile.css'

function CompanyProfile() {
  return (
    <main className='company_main_tab'>
      <div className='tabbs'>
      <Tabs
        defaultActiveKey="general"
        id="uncontrolled-tab-example"
        className=" bg-light"
      >
        <Tab eventKey="general" title="General">
          {/* <General /> */}
          <p>General</p>
        </Tab>
        <Tab eventKey="clients" title="Clients">
          {/* <General /> */}
          <p>Clients</p>
        </Tab>
        <Tab eventKey="registry" title="Registry">
          {/* <General /> */}
          <p>Registry</p>
        </Tab>
        <Tab eventKey="payroll" title="Payroll">
          {/* <General /> */}
          <p>payroll</p>
        </Tab>
        <Tab eventKey="symmetry" title="Symmetry">
          {/* <General /> */}
          <p>Symmetry</p>
        </Tab>
        <Tab eventKey="invoicing" title="Invoicing">
          {/* <General /> */}
          <p>Invoicing</p>
        </Tab>
        <Tab eventKey="lockbox" title="Lockbox">
          {/* <General /> */}
          <p>Lockbox</p>
        </Tab>
        <Tab eventKey="branding" title="Branding">
          {/* <General /> */}
          <p>Branding</p>
        </Tab>
        <Tab eventKey="apiIntegration" title="API Integration">
          {/* <General /> */}
          <p>API Integration</p>
        </Tab>
      </Tabs>
      </div>
    </main>
  )
}

export default CompanyProfile