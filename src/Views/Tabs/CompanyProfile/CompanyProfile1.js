import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import General1 from './general/General1';
import General2 from './general/General2';
import General3 from './general/General3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComplanyProfile1.css'

function CompanyProfile1() {
    return (
        <main className='company_main_tab bg-light'>
            <div className='cennt'>
                <div className='tabbs1'>
                    <Tabs
                        defaultActiveKey="general"
                        id="uncontrolled-tab-example"
                        className=""
                    >
                        <Tab eventKey="general" title="General">
                            <General1 />
                            {/* <p>General</p> */}
                        </Tab>
                        <Tab eventKey="clients" title="Clients">
                            <General2 />
                            {/* <p>Clients</p> */}
                        </Tab>
                        <Tab eventKey="registry" title="Registry">
                            <General3 />
                            {/* <p>Registry</p> */}
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
            </div>
        </main>
    )
}

export default CompanyProfile1