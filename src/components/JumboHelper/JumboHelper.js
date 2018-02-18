import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Jumbotron, Row} from "reactstrap"

const JumboHelper = (props) =>
  <Row className={"margin1"}>
    <Col>
      <Jumbotron
        style={{backgroundImage: "url('https://picsum.photos/800/600?image=994')", backgroundSize: "cover"}}>
        <h1 className="display-3">{props.title}</h1>
        <h5>{props.subtitle}</h5>
        <hr className="my-2"/>
        <h6>{props.text}</h6>
        <Button color="danger">Learn more about {props.action}</Button>
      </Jumbotron>
    </Col>
  </Row>;

JumboHelper.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default JumboHelper;
