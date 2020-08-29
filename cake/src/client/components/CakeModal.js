import React, { useState, useEffect } from 'react'
import { Button, Modal, Card } from 'react-bootstrap'

export default function CakeModal(props) {

  return (
    <>
      <Modal show={props.show} size='lg' onHide={props.action} animation={false}>
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
            <Button variant="secondary" onClick={props.action}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
