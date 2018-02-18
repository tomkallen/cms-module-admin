import React from 'react';
import ParagraphModal from "./ParagraphModal";

const WrapperModal = props => (
  <div>
    <ParagraphModal handleModal={props.handleModal} isOpen={props.isOpen}/>
  </div>
);

export default WrapperModal;
