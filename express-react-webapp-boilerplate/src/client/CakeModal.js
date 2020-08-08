import React, { useState } from 'react'
import { Button, Modal, Container, Row, Col } from 'react-bootstrap'

export default function CakeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                { props.imageUrl }
              </Col>
              <Col>
                <Row>
                  { props.name }
                </Row>
                <Row>
                  { props.comment }
                </Row>
                <Row>
                  { props.yumFactor }
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
