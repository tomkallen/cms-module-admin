import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Container, Row} from 'reactstrap';
import {Link, Route} from "react-router-dom"
import Blog from "../Blog/Blog";
import JumboHelper from "../JumboHelper/JumboHelper"

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideHeader: props.location.pathname !== "/editor"
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({hideHeader: nextProps.location.pathname !== "/editor"})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Page Editor</h1>
          </Col>
        </Row>
        {!this.state.hideHeader && <div>
          <Row>
            <Col>
              <h5>What would you like to create?</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonGroup>
                <Link to={"/editor/blog"}>
                  <Button onClick={() => this.setState({hideHeader: true})} color={"primary"}>Blog Post</Button>
                </Link>
                <Button color={"primary"}>Article</Button>
                <Button color={"primary"}>Note</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <JumboHelper
            title={"Hello world!"}
            subtitle={"Share your thoughts and knowledge by creating content"}
            text={"Different types of pages will be rendered and displayed differently on your site."}
            action={"editing"}/>
        </div>}
        <Route path={`${this.props.match.url}/blog`} component={Blog}/>
      </Container>
    );
  }
}

Editor.propTypes = {};

export default Editor;
