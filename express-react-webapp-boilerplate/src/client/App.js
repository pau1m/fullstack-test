import React, { Component } from 'react'
import './app.css'
import { Container, Row, Col } from 'react-bootstrap'
import CakeModalForm from './CakeModalForm'
import CakeSummary from "./CakeSummary";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cakes: []
    }
  }

  componentDidMount() {

    fetch('http://localhost:1338/api/v1/cakes')
      .then(res => res.json())
      .then(cakes => this.setState({
        cakes: cakes
      }))
  }

  render() {
    const items = this.state.cakes.map((item) =>
      // @todo fix return of _.id
      <Col xs={12} md={4} lg={3} className={'d-flex pb-3'} key={item.id} >
        <CakeSummary
          name={item.name}
          comment={item.comment}
          id={item.id}
          yumFactor={item.yumFactor}
          imageUrl={item.imageUrl}
        />
      </Col>
    );

    return (
      <>

  <Container>
          <Row>
            <Col sm={2} className='my-auto'>
              <CakeModalForm />
            </Col>
            <Col sm={10} >
              <h1>Crud Cakes</h1>
            </Col>
          </Row>
          <Row>
            {items}
          </Row>
        </Container>
      </>
    )
  }
}
