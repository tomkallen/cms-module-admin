import React, {Component} from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

class ParagraphModal extends Component {
  constructor(props) {
    super(props);
    this.state = {paragraph: ""}
  }

  onTextChange = (event) => this.setState({paragraph: event.target.value});

  onSave = () => {
    const text = this.state.paragraph;
    if (text.length) {
      console.log(this.state.paragraph);
      const data = {[this.props.id]:{ type: "paragraph", value: text}};
      this.props.saveElement(data)
    }
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen === "paragraph"}>
        <ModalHeader>Paragraph</ModalHeader>
        <ModalBody>
          <h6>Feel free to use markdown here </h6>
          <FormGroup>
            <Label for="exampleText">Enter your text</Label>
            <Input
              onChange={this.onTextChange}
              type="textarea" name="text"
              id="paragraphtext"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.onSave} color="primary">Add</Button>
          <Button onClick={this.props.handleModal} color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ParagraphModal;
