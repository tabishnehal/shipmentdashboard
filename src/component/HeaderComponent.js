import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isNavOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

  render() {
    return(
    <React.Fragment>
      <Navbar light expand="md">
        <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto ml-3" href="/">
                <img src="FrontendAssets/logo.svg" height="40" width="40"
                alt="Intugine" />
                <b> Intugine</b>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                             <strong>Home</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/brands">
                             <strong>Brands</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/transporter">
                             <strong>Transporters</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/profile">
                            <img className="mr-2" src="FrontendAssets/profile.svg" height="20" width="20"
                            alt="Profile" />
                            <span className="fa fa-chevron-down fa-sm">  </span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;