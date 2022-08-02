/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState, useContext } from "react";

// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,  
  Media,
  Navbar,  
  Nav,
  Container,
  Col
} from "reactstrap";



const AdminNavbar = ( {metricsList}) => {
  // function that on mobile devices makes the search open

  
  
    return (
      <>
        <Navbar
          className={classnames(
            "navbar-top navbar-expand border-bottom pb-2 pt-2 navbar-light alert-success "
          )}
        >
          <Container fluid>
            <Collapse navbar isOpen={true}>
              
              <ul class="mr-auto navbar-nav">
               
                <li class="nav-item pt-3">
                  <a class="nav-link" >
                    <small class="nav-link-inner--text text-body">
                    <i class="ni ni-single-02 pr-2"></i>                    
                      NEW CUSTOMERS: 99
                    </small>
                  </a>
                </li>
                
              </ul>
             
              <Nav className="align-items-center ml-auto ml-md-0" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link pr-0 cursor-pointer" color="" tag="a">
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        {/* <img
                          alt="..."
                          src={require("assets/img/theme/team-4.jpg")}
                        /> */}
                        <i className="ni ni-single-02"></i>
                      </span>
                      <Media className="ml-2 d-none d-lg-block ">
                        <span className="mb-0 text-sm  text-body ">
                         <label className="cursor-pointer h5"> Login Name</label> 
                        </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="noti-title" header tag="div">
                      <h6 className="text-overflow m-0">Welcome!</h6>
                    </DropdownItem>
                   
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      
                    >
                      <i className="ni ni-user-run" />
                      <span>Logout</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  
}
AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark"
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"])
};

export default AdminNavbar;
