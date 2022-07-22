import React from "react";
import { Table, Pagination, Navbar, Container, Nav } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './userProfileTable.css'

function UserProfileTable() {
    return (
        <main className="main_userProfileTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="userProfileTable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> User Profile </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table >
                                    <thead>
                                        <tr className='bg-light' >
                                            <th>Status</th>
                                            <th>Count</th>
                                            <th>Cur</th>
                                            <th>30</th>
                                            <th>60</th>
                                            <th>90</th>
                                            <th>Cur</th>
                                            <th>30</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Inquiry</td>
                                            <td>14232</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>4179</td>
                                            <td>4179</td>
                                        </tr>
                                        <tr>
                                            <td>Inquiry</td>
                                            <td>14232</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>4179</td>
                                            <td>4179</td>
                                        </tr>
                                        <tr>
                                            <td>Inquiry</td>
                                            <td>14232</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>10054</td>
                                            <td>4179</td>
                                            <td>4179</td>
                                        </tr>

                                    </tbody >

                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function AdvancedExample() {
    return (
        <Pagination>
            <Pagination.Item active>{1}</Pagination.Item>
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

function Navv() {
    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    <Nav.Link href="/user" className='py-1 px-3'><i class="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i class="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                    <Nav.Link href="/userProfileTable" className='py-1 px-3'><i class="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}


export default UserProfileTable;
