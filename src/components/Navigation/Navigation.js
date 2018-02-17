import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div>
          <Navbar fixed expand="sm">
            <NavbarBrand href="/">awesome cms</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/manager/">page manager</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">summary</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

export default Navigation;
