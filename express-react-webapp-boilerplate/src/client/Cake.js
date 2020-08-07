import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cake(props) {

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
