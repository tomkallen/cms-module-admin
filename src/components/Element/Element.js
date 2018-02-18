import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import PropTypes from "prop-types";

class Element extends Component {
  render() {
    const text = this.props.value.length > 120? this.props.value.slice(0, 117) +"..." : this.props.value;
    return (
      <Card>
        <CardBody>
          <CardSubtitle>{this.props.type}</CardSubtitle>
          <CardText>{text}</CardText>
          <Button color={"primary"} size={"sm"}>edit</Button>
        </CardBody>
      </Card>
    );
  }
}

Element.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Element;
