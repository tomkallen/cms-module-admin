import React, {Component} from 'react';
import {Grid, Row, Col, Button, ButtonToolbar} from 'react-bootstrap/lib';

class Selector extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>;
        </Row>
      </Grid>
    );
  }
}

export default Selector;
