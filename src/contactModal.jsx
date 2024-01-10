import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-bootstrap/Modal";

export default function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        onClick={handleShow}
        id="whatsAppModalButton"
        className="button hidden-button"
      >
        Message me on WhatsApp
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WhatsApp Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {" "}
          <h5>Scan the QR code or click the button below</h5>
          <a
            className="btn btn-success my-3"
            href="https://wa.me/message/QQPYJ3RUNEH7L1?src=qr"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="sm" className="me-3" /> Add
            me on WhatsApp
          </a>
          <img src="./Images/contact/WhatsApp.png" alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}
