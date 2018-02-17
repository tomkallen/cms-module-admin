import React from 'react';
import {Button, ButtonGroup, Col, Container, Jumbotron, Row} from 'reactstrap';
import {Link, Route} from "react-router-dom"
import Blog from "../Blog/Blog";

const Editor = ({match}) => {
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
            <Link to={"/editor/blog"}><Button color={"primary"}>Blog Post</Button></Link>
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
          <Row>
            <Col className={"text-right"}>
              <Button color="primary" size={"sm"}>hide this help screen forever</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Route path={`${match.url}/blog`} component={Blog}/>
    </Container>
  );
};

Editor.propTypes = {};

export default Editor;
