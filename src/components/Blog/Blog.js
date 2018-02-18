import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Controls from "../Controls/Controls";
import WrapperModal from "../Modals/ModalWrapper";
import Element from "../Element/Element";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {modalState: false, type: "", body: {}, currentId: null}
  }

  handleModal = (type, id) => {
    if (!id) {
      id = String(Math.random()).slice(2) + "-" + String(Math.random()).slice(2);
      this.setState({modalState: type, currentId: id});
    }
    this.setState({modalState: type})
  };

  saveElement = (data) => {
    const body = {...this.state.body, ...data};
    this.setState({body, modalState: null, currentId: null});
  };

  renderStructure = () => {
    const b = this.state.body;
    const els = Object.keys(this.state.body);
    return els.map(e => <Element key={"key-" + b[e].identifier} type={b[e].type} value={b[e].value}/>);
  };


  render() {
    console.log(this.state.body)
    return (
      <Container>
        <Row>
          <h4>Blog</h4>
        </Row>
        <Row>
          <Col className={"text-left"}>
            <Link to={"/editor"}>
              <Button color="primary">Go back</Button>
            </Link>
          </Col>
          <Col className={"text-right"}>
            <Link to={"/editor"}>
              <Button color="danger">Discard</Button>
            </Link>
            <Link to={"/editor"}>
              <Button color="info">Save</Button>
            </Link>
          </Col>
        </Row>
        <Form>
          <Row className={"margin1"}>
            <Col lg={{size: 3}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input bsSize="sm" type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
              </FormGroup>
            </Col>
            <Col lg={{size: 3}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input bsSize="sm" type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
              </FormGroup>
            </Col>
            <Col lg={{size: 3}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleSearch">Tags</Label>
                <Input bsSize="sm" type="search" name="search" id="exampleSearch" placeholder="search placeholder"/>
              </FormGroup>
            </Col>
            <Col lg={{size: 3}} md={{size: 6}} sm={{size: 12}}>
              <FormGroup>
                <Label for="exampleSelect">Section</Label>
                <Input bsSize="sm" type="select" name="select" id="exampleSelect">
                  <option>Programming</option>
                  <option>Cooking</option>
                  <option>Travelling</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row className={"margin2"}>
          <Col>
            <h3 align="center"> Post structure </h3>
          </Col>
        </Row>
        {this.renderStructure()}
        <Controls handleModal={this.handleModal}/>
        <WrapperModal saveElement={this.saveElement} handleModal={this.handleModal} isOpen={this.state.modalState}
                      id={this.state.currentId}/>
      </Container>
    );
  }
}

Blog.propTypes = {};

export default Blog;
