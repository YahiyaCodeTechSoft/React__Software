import React from 'react';
import { Tab, Tabs, Alert, Navbar, Container, Nav } from 'react-bootstrap';
import General from './general/General';
import Client from './client/Client';
import Registry from './registry/Registry'
import PayRoll from './payRoll/PayRoll'
import Reference from './reference/Reference';
import Education from './Education/Education'
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import EmploymentHistory from './EmploymentHistory/EmploymentHistory'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComplanyProfile.css'

function CompanyProfile() {
    return (
        <main className='company_main_tab '>
            <NavigationTop />

            <Navv />
            <div className='cennt'>

                <div className='tabbs1'>
                    <Alert className="text-center m-0 alertt">
                        Company Profile
                    </Alert>

                    <div className='tabbs'>
                    <Tabs
                        defaultActiveKey="general"
                        id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <General />
                        </Tab>
                        <Tab eventKey="clients" title="Clients">
                            <Client />
                        </Tab>
                        <Tab eventKey="registry" title="Registry">
                            <Registry />
                        </Tab>
                        <Tab eventKey="payroll" title="Payroll">
                            <PayRoll />
                        </Tab>
                        <Tab eventKey="reference" title="Reference">
                            <Reference />
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <Education />
                        </Tab>
                        <Tab eventKey="employmentHistory" title="EmploymentHistory">
                            <EmploymentHistory />
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
        </main>
    );
};

function Navv() {
    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                     <Nav.Link href="/companyProfile" className='py-1 px-3'><i class="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                    <Nav.Link href="/companyProfileTable" className='py-1 px-3'><i class="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default CompanyProfile;