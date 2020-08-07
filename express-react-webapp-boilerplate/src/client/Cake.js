import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cake(props) {
  // @todo add prop types
  // @todo handle cases of absent data
  // console.log(props)

  return (
    <div>
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
    </div>
  )

}
