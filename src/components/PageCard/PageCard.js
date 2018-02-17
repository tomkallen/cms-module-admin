import React, {Component} from "react"
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';

export default class PageCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col lg={{size: 2}}>
        <Card>
          <CardImg top
                   width="100%"
                   src={"https://picsum.photos/200/200?image=" + this.props.index}
                   alt="Card image cap"/>
          <CardBody>
            <CardTitle>My Blog Post</CardTitle>
            <CardSubtitle>Meat between the buns</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's
              content.</CardText>
            <Button color={"primary"} size={"sm"}>Edit</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
