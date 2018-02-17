import React, {Component} from 'react';
import {
  Grid,
  Row,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Row>
          <Navbar bsStyle="inverse">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">CMS</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>
                Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
              </Navbar.Text>
              <Navbar.Text pullRight>Have a great day!</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <ButtonToolbar>
            <Button>Default</Button>

            <Button bsStyle="primary">Primary</Button>

            <Button bsStyle="success">Success</Button>

            <Button bsStyle="info">Info</Button>

            <Button bsStyle="warning">Warning</Button>

            <Button bsStyle="danger">Danger</Button>

            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>
        </Row>
      </div>
    );
  }
}

export default Navigation;
