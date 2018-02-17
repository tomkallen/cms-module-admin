import React, {Component} from 'react';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import './Editor.css';
import PageCard from "../PageCard/PageCard"

import {Button, ButtonGroup, Col, Container, Row} from 'reactstrap';

class Editor extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{offset:1}}><h1>page manager</h1></Col>
        </Row>
        <Row>
          <Col lg={{offset: 1}}>
            <ButtonGroup>
              <Button color={"primary"}>Blog Posts</Button>
              <Button color={"primary"}>Articles</Button>
            </ButtonGroup>
          </Col>
          <Col lg={{offset: 8}}>
              <Button color={"primary"}>
                add page
              </Button>

          </Col>
        </Row>
        <Row className={"margin1"}>
          <PageCard index={1}/>
          <PageCard index={33}/>
          <PageCard index={122}/>
          <PageCard index={444}/>
          <PageCard index={24}/>
          <PageCard index={153}/>
        </Row>
      </Container>
    );
  }
}

export default Editor;
