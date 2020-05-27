import React from 'react';
import { Modal } from "react-bootstrap";
import styled from 'styled-components';
import "./popup.css";

const Img = styled.img`
  max-width: 100%;
  height: auto;
`
const P = styled.p`
  margin-top: 10px;
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
        <P>{desc}</P>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button> 
      </Modal.Footer>*/}
    </Modal>
  );
}

export default Popup;