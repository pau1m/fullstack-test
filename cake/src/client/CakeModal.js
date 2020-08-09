import React, { useState } from 'react'
import { Button, Modal, Card } from 'react-bootstrap'

export default function CakeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} size='lg' onHide={handleClose} animation={false}>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={`https://via.placeholder.com/360x200.png?text=${props.imageUrl}`} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                <p> Comment: {props.comment} </p>
                <p> Rating: {props.yumFactor}</p>
              </Card.Text>
            </Card.Body>
          </Card>
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
