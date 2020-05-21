import React from 'react';
import { Modal } from "react-bootstrap";
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  height: auto;
`

const Popup = (props) => {
  const {title, desc, img} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img src={img} alt={title} />
        <p>{desc}</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;