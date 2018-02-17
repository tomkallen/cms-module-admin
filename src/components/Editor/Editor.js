import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Container, Jumbotron, Row} from 'reactstrap';

class Editor extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{offset: 1}}>
            <h1>Page Editor</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={{offset: 1}}>
            <h5>What would you like to create?</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={{offset: 1}}>
            <ButtonGroup>
              <Button color={"primary"}>Blog Post</Button>
              <Button color={"primary"}>Article</Button>
              <Button color={"primary"}>Note</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className={"margin1"}>
          <Col lg={{offset: 1, size: 10}}>
            <Jumbotron
              style={{backgroundImage: "url('https://picsum.photos/800/600?image=994')", backgroundSize: "cover"}}>
              <h1 className="display-3">Hello, world!</h1>
              <h5>Share your thoughts and knowledge by creating content</h5>
              <hr className="my-2"/>
              <h6>Different types of pages will be rendered and displayed differently on your site.</h6>
              <Button color="danger">Learn more about editing</Button>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

Editor.propTypes = {};

export default Editor;
