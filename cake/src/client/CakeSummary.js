import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CakeModal from './CakeModal'

const cardButtonStyle =  {
  'all': 'unset',
  'cursor': 'pointer'
}

export default function Cake(props) {

  const [show, setShow] = useState(false)

  const togglePopup = () => {
    setShow(!show)
  }

  return (
    <>
      <button style={cardButtonStyle} onClick={togglePopup}>
      <Card>
        <Card.Img variant="top" src={`https://via.placeholder.com/180x100.png?text=${props.imageUrl}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <CakeModal {...props} show={show} action={togglePopup}/>
        </Card.Body>
      </Card>
    </button>
    </>
  )
}
