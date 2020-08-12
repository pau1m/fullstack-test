import React, { Component } from 'react'
import {Col, Container, Row} from "react-bootstrap"
import CakeSummary from "./CakeSummary"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCakes } from './actions/cakeActions'

class CakeList extends Component {

  componentDidMount() {
    this.props.fetchCakes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addCake) {
      this.props.cakes.push(nextProps.addCake)
    }
  }

  render() {

    const items = (this.props.cakes) ? this.props.cakes.map((item) =>
      <Col xs={6} md={4} lg={3} className={'d-flex pb-3'} key={item.id} >

        <CakeSummary
          name={item.name}
          comment={item.comment}
          id={item.id}
          yumFactor={item.yumFactor}
          imageUrl={item.imageUrl}
        />
      </Col>
    ) : []

    return (
        <Container>
          <Row>
            {items.reverse()}
          </Row>
        </Container>
    )
  }
}

CakeList.propTypes = {
  fetchCakes: PropTypes.func,
  cakes: PropTypes.array,
  cake: PropTypes.object
}

const mapStateToProps = state => ({
  cakes: state.cakes.items,
  addCake: state.cakes.item
})

export default connect(mapStateToProps, { fetchCakes })(CakeList);




