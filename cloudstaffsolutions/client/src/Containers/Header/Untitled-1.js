<ListGroup as='ul' className="list">
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"> <i className="fa-solid fa-user"></i> <span> Scheduling  </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/clientTable"><i className="fa-solid fa-users"></i> <span> Clients </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-database"></i> <span> Registry </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-bars"></i> <span> Intouch </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-users"> </i><span> Rates </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i className="fa-solid fa-table-columns"></i> <span> Timecards </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/employeeTable"><i className="fa-solid fa-code-branch"></i> <span> Employee </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i class="fa-solid fa-briefcase"></i> <span> Work History </span> </NavLink>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i class="fa-solid fa-file-invoice"></i> <span> Billing </span> </NavLink>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/"><i class="fa-solid fa-address-card"></i> <span> Timecards </span> </NavLink>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item as='li' className={open ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen(!open); }}>
            <NavLink to="#"><i class="fa-solid fa-user-lock"></i> <span> Admin  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/companyProfileTable"> <i class="fa-solid fa-id-badge"></i> <span> Company Profile </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/allBranches"> <i class="fa-solid fa-code-branch"></i> <span> Branches </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i class="fa-solid fa-star-and-crescent"></i> <span> Regions </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i class="fa-solid fa-lock"></i> <span> Security Groups </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/userProfileTable"> <i className="fa-solid fa-users"></i>  <span> Users </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i class="fa-solid fa-user-group"></i> <span> Burden Groups </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i class="fa-brands fa-cc-diners-club"></i> <span> Credentials </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Disciplines </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i class="fa-solid fa-bars-staggered"></i> <span> Drop Down Codes </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Earning Deducation Codes </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Email History </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> G/L Accounts </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Holidays </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Intouch Templates </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Invoice Formats </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Invoice Profile </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Mailing Lables </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Notification Templates </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Online Application </span> </NavLink></ListGroup.Item>
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>