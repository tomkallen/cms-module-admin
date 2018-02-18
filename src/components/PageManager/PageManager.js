import React, {Component} from 'react';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import PageCard from "../PageCard/PageCard"
import {Link} from "react-router-dom"

import {Button, ButtonGroup, Col, Container, Row} from 'reactstrap';

class PageManager extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>page manager</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              <Button color={"primary"}>Blog Posts</Button>
              <Button color={"primary"}>Articles</Button>
            </ButtonGroup>
          </Col>
          <Col className={"text-right"}>
            <Link to="/editor"><Button color={"info"}>
              add page
            </Button></Link>
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

export default PageManager;
