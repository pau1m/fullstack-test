import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function CakeList (props) {

  console.log(props)

  return (
    <div>
      <Container>
        <Row>
          <Col>
            Picture
          </Col>
          <Col>
            <Row>
              Name
            </Row>
            <Row>
              Comment
            </Row>
            <Row>
              Yum Factor
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )

}
