import React, { Component } from 'react'
import './app.css'

//@todo, change to functional compontent
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

    const items = this.state.cakes.map((item, key) =>
      <li key={item.name}>{item.name}</li>
    );

    return (
      <div>
        Hello world
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
