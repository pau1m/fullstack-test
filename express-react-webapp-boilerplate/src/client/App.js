import React, { Component } from 'react'
import './app.css'
import CakeModalForm from './CakeModalForm'
import CakeSummary from "./CakeSummary";
//@todo, consider change to functional component
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
      <li key={item.id} >
        <CakeSummary
          name={item.name}
          comment={item.comment}
          id={item.id}
          yumFactor={item.yumFactor}
          imageUrl={item.imageUrl}
        />
      </li>
    );

    return (
      <div>
        <CakeModalForm />
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
