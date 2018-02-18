import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

class Blog extends Component {

  render() {
    return (
      <Container>
        <Row>
          <h4>Blog</h4>
        </Row>
        <Row>
          <Col className={"text-right"}>
            <Link to={"/editor"}>
              <Button color="info">Save and go back</Button>
            </Link>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col lg={{size: 6}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input bsSize="sm" type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input bsSize="sm" type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
              </FormGroup>
            </Col>
            <Col lg={{size: 6}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleSearch">Tags</Label>
                <Input bsSize="sm" type="search" name="search" id="exampleSearch" placeholder="search placeholder"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Section</Label>
                <Input bsSize="sm" type="select" name="select" id="exampleSelect">
                  <option>Programming</option>
                  <option>Cooking</option>
                  <option>Travelling</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input bsSize="sm" type="checkbox"/>
                  Do something extra
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

Blog.propTypes = {};

export default Blog;
