import React from 'react';
import { Card } from 'react-bootstrap';
import CakeModal from './CakeModal'

export default function Cake(props) {

  return (
    <>
      <Card>
        <Card.Img variant="top" src={`https://via.placeholder.com/180x100.png?text=${props.imageUrl}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <CakeModal {...props} />
        </Card.Body>
      </Card>
    </>
  )
}
