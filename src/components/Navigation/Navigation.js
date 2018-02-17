import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div>
          <Navbar fixed expand="sm">
            <NavbarBrand href="/">CMS</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/editor/">page manager</NavLink>
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
