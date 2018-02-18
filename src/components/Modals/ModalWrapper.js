import React from 'react';
import ParagraphModal from "./ParagraphModal";

const WrapperModal = props => (
  <div>
    <ParagraphModal saveElement={props.saveElement} id={props.id} handleModal={props.handleModal} isOpen={props.isOpen}/>
  </div>
);

export default WrapperModal;
