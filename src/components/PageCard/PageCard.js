import React, {Component} from "react"
import {Badge, Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';

export default class PageCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col lg={{size: 3}} sm={{size: 6}} md={{size: 3}}>
        <Card>
          <CardImg top
                   width="100%"
                   src={"https://picsum.photos/200/200?image=" + this.props.index}
                   alt="Card image cap"/>
          <CardBody>
            <CardTitle>My Blog Post</CardTitle>
            <CardSubtitle>Meat between the buns</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CardText>
            <Button color={"info"} size={"sm"}>Edit</Button>
            <Button color={"info"} size={"sm"}>Publish</Button>
            <Button color={"danger"} size={"sm"}>Archive</Button>
          </CardBody>
          <CardFooter className="text-muted">
            <Badge color={"warning"}>javascript</Badge>,
            <Badge color={"warning"}>cooking</Badge>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}
