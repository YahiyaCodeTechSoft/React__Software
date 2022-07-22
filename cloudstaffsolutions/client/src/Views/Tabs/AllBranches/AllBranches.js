import React from 'react';
import { Tab, Tabs, Alert, Navbar, Container, Nav } from 'react-bootstrap';
import Branch from './Branch/Branch';
import Scheduling from './Scheduling/Scheduling';
import PayRoll from './PayRoll/PayRoll';
import Billing from './Billing/Billing';
import Client from './Client/Client';
import Registry from './Registry/Registry';
import CheckLayout from './CheckLayout/CheckLayout';
import Invoicing from './Invoicing/Invoicing';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllBranches.css'

function AllBranches() {
    return (
        <main className='allbranches_main_tab'>
            <NavigationTop />

            <Navv />

            <div className='cennt'>
                <div className='tabbs1'>
                    <Alert className="text-center m-0 alertt">
                        All Branches
                    </Alert>
                    <div className='tabbs'>
                        <Tabs
                            defaultActiveKey="branch"
                            id="uncontrolled-tab-example">
                            <Tab eventKey="branch" title="Branch">
                                <Branch />
                            </Tab>
                            <Tab eventKey="scheduling" title="Scheduling">
                                <Scheduling />
                            </Tab>
                            <Tab eventKey="payroll" title="PayRoll">
                                <PayRoll />
                            </Tab>
                            <Tab eventKey="billing" title="Billing">
                                <Billing />
                            </Tab>
                            <Tab eventKey="client" title="Client">
                                <Client />
                            </Tab>
                            <Tab eventKey="registry" title="Registry">
                                <Registry />
                            </Tab>
                            <Tab eventKey="checklayout" title="CheckLayout">
                                <CheckLayout />
                            </Tab>
                            <Tab eventKey="invoicing" title="Invoicing">
                                <Invoicing />
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
                    <Nav.Link href="/dashboard" className='py-1 px-3'><i className="fa-solid fa-users"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-users"></i> Edit</Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-users"></i> Save</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AllBranches;