import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap"
import "./Controls.css";

class Controls extends Component {
  render() {
    return (
      <div className={"Controls"}>
        <Container>
          <Row>
            <Col align={"center"}>
              <ButtonGroup>
                <Button color={"info"}>+Subtitle</Button>
                <Button
                  onClick={() => this.props.handleModal("paragraph")}
                  color={"info"}>+Paragraph</Button>
                <Button color={"info"}>+Image</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Controls.propTypes = {};

export default Controls;
