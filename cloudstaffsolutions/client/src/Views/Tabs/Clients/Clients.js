import React from 'react';
import { Tab, Tabs, Alert, Navbar, Container, Nav } from 'react-bootstrap';
import General from './General/General';
import Addresses from './Addresses/Addresses';
import Billing from './Billing/Billing';
import Invoicing from './Invoicing/Invoicing';
import Credits from './Credit/Credit';
import Holidays from './Holidays/Holidays';
import Instructions from './Instructions/Instructions';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clients.css'

function Clients() {
    return (
        <main className='clients_main_tab'>
            <NavigationTop />

            <Navv />

            <div className='cennt'>
                <div className='tabbs1'>
                    <Alert className="text-center m-0 alertt">
                        Client
                    </Alert>
                    <div className='tabbs'>
                        <Tabs
                            defaultActiveKey="general"
                            id="uncontrolled-tab-example">
                            <Tab eventKey="general" title="General">
                                <General />
                            </Tab>
                            <Tab eventKey="addresses" title="Addresses">
                                <Addresses />
                            </Tab>
                            <Tab eventKey="billing" title="Billing">
                                <Billing />
                            </Tab>
                            <Tab eventKey="invoicing" title="Invoicing">
                                <Invoicing />
                            </Tab>
                            <Tab eventKey="credits" title="Credits">
                                <Credits />
                            </Tab>
                            <Tab eventKey="holidays" title="Holidays">
                                <Holidays />
                            </Tab>
                            <Tab eventKey="instructions" title="Instructions">
                                <Instructions />
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
                    <Nav.Link href="/dashboard" className='py-1 px-3'><i class="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default Clients;