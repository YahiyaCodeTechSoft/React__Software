// React
import React from "react";
// import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// Auth
import UserProfile from './Views/Auth/UserProfile';


import Department from './Views/Departments/department';
import Taxes from "./Views/Taxes/taxes";
import Menu from "./Views/Menues/menu";


// Admin
import User from "./Views/Users/User";
import EmployeeProfile from './Views/EmployeeProfile/employeeProfile';
import Holiday from './Views/Admin/Holiday/Holiday'
import PaidLeave from './Views/Admin/PaidLeavePolicy/PaidLeave'



// Tabs
import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile';
import Clients from './Views/Tabs/Clients/Clients';
import AllBranches from './Views/Tabs/AllBranches/AllBranches';

// Tables
import UserProfileTable from './Views/Table/UsersTable/UserProfileTable';
import ClientTable from './Views/Table/ClientTable/ClientTable';
import EmployeeTable from './Views/Table/EmployeeTable/EmployeeTable';
import CompanyProfileTable from './Views/Table/CompanyTable/CompanyProfileTable';
import BranchTable from './Views/Table/branchTable/BranchTable';
import HolidayTable from './Views/Table/HolidayTable/HolidayTable';
import PaidLeaveTable from './Views/Table/PaidLeaveTable/PaidLeaveTable';

// Navbar
import Navigation from './Containers/Header/Header';

// Dashboard
import Dashboard from './Views/Dashboard/Dashboard';

// Support
import Support from './Views/Support/Support';


import Error from './Error'

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [user, setLoginUser] = useState({})
  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">

            {/* <CompanyProfile1 /> */}

            <Navigation />



            <Routes>
              {/* Auth */}
              <Route path="/" element={<UserProfile />} />


              {/* Admin */}
              <Route path="/employee" element={<EmployeeProfile />} />
              <Route path="/department" element={<Department />} />
              <Route path="/taxes" element={<Taxes />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/user" element={<User />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/paidLeave" element={<PaidLeave />} />


              {/* Tabs */}
              <Route path="/clients" element={<Clients />} />
              <Route path="/allBranches" element={<AllBranches />} />
              <Route path="/companyProfile" element={<CompanyProfile />} />


              {/* Tables */}
              <Route path="/userProfileTable" element={<UserProfileTable />} />
              <Route path="/clientTable" element={<ClientTable />} />
              <Route path="/employeeTable" element={<EmployeeTable />} />
              <Route path="/companyProfileTable" element={<CompanyProfileTable />} />
              <Route path="/branchTable" element={<BranchTable />} />
              <Route path="/holidayTable" element={<HolidayTable />} />
              <Route path="/paidLeaveTable" element={<PaidLeaveTable />} />



              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<Error />} />

            </Routes>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
