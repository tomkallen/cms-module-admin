import React, {Component} from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import PropTypes from "prop-types";

class ParagraphModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen === "paragraph"}>
        <ModalHeader>Paragraph</ModalHeader>
        <ModalBody>
          <h6>Feel free to use markdown here </h6>
          <FormGroup>
            <Label for="exampleText">Enter your text</Label>
            <Input type="textarea" name="text" id="paragraphtext"/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add</Button>
          <Button onClick={this.props.handleModal} color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ParagraphModal.propTypes = {
  type: PropTypes.string.isRequired
};

export default ParagraphModal;
