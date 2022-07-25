import React from "react";
// import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import UserProfile from './Views/Auth/UserProfile';
import EmployeeProfile from './Views/EmployeeProfile/employeeProfile';
import Department from './Views/Departments/department';
import Taxes from "./Views/Taxes/taxes";
import User from "./Views/Users/User";
import Menu from "./Views/Menues/menu";
import Navigation from './Containers/Header/Header';
// import NavigationTop from './Containers/HeaderTop/headerTop';
import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile';
import Clients from './Views/Tabs/Clients/Clients';
import AllBranches from './Views/Tabs/AllBranches/AllBranches';
import Dashboard from './Views/Dashboard/Dashboard';
import UserProfileTable from './Views/Table/UsersTable/UserProfileTable';
import ClientTable from './Views/Table/ClientTable/ClientTable';
import EmployeeTable from './Views/Table/EmployeeTable/EmployeeTable';
import CompanyProfileTable from './Views/Table/CompanyTable/CompanyProfileTable';
import BranchTable from './Views/Table/branchTable/BranchTable';
import Support from './Views/Support/Support';
import Error from './Error'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile'
// import View from './Views/view';

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
              {/* <Route exact path="/home" element={<Home />} /> */}
              {/* <Route exact path="/home" element={
             user && user._id ? <Home setLoginUser={setLoginUser}/> : <UserProfile setLoginUser={setLoginUser} />
            } /> */}
              {/* <Route path="/login" element={<UserProfile />} /> */}
              {/* <Route path="/login" element={<UserProfile setLoginUser={setLoginUser} />} /> */}
              {/* <Route path="/login" element={<UserProfile />} />
              <Route path="/department" element={<Department />} />
              <Route path="/taxes" element={<Taxes />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/companyProfile" element={<CompanyProfile />} />
              <Route path="*" element={<Error />} /> */}


              {/*  yahiya */} 

              <Route  path="/" element={<UserProfile />} />
            <Route  path="/dashboard" element={<Dashboard />} />
            <Route  path="/support" element={<Support />} />
            <Route path="/employee" element={<EmployeeProfile />} />
            <Route path="/department" element={<Department />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/user" element={<User />} />
            <Route path ="/companyProfile" element={<CompanyProfile />} />
            <Route path ="/clients" element={<Clients />} />
            <Route path ="/allBranches" element={<AllBranches />} />
            <Route path ="/userProfileTable" element={<UserProfileTable />} />
            <Route path ="/clientTable" element={<ClientTable />} />
            <Route path ="/employeeTable" element={<EmployeeTable />} />
            <Route path ="/companyProfileTable" element={<CompanyProfileTable />} />
            <Route path ="/branchTable" element={<BranchTable />} />
            <Route path="*" element={<Error />} />

            </Routes>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
