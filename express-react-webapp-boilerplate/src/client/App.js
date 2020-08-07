import React, { Component } from 'react'
import './app.css'
import Cake  from "./Cake";

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

    const items = this.state.cakes.map((item) =>
      // @todo fix return of _.id
      <li key={item.id} >
        <Cake
          name={item.name}
          comment={item.comment}
          id={item.id}
          yumFactor={item.yumFactor}
          imageUrl={item.imageUrl}
        />
      </li>

      // @todo <CakeForm />

    );

    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
