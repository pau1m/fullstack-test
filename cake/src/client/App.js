import React, { Component } from 'react'
import './app.css'
import { Container, Row, Col } from 'react-bootstrap'
import CakeModalForm from './CakeModalForm'
import CakeList from './CakeList'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Row>
            <Col xs={2} sm={3} className='my-auto'>
              <CakeModalForm />
            </Col>
            <Col xs={10} sm={9} >
              <h1>Crud Cakes</h1>
            </Col>
          </Row>
          <Row>
            <CakeList />
          </Row>
        </Container>
       </Provider>
    )
  }
}
