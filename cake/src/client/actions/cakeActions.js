import { FETCH_CAKES, ADD_CAKE } from './types'

export const fetchCakes = () => dispatch => {
  fetch('http://localhost:1338/api/v1/cakes', {
    headers: {
    'accept': 'application/json'
  }})
    .then(res => {

      console.log(res)
      return res.json()
    })
    .then(cakes =>
      dispatch({
        type: FETCH_CAKES,
        payload: cakes
      })
    )
}

export const addCake = cakeData => dispatch => {
  fetch('http://localhost:1338/api/v1/cakes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(cakeData)
  })
    .then(res => res.json())
    .then(cake =>
      dispatch({
        type: ADD_CAKE,
        payload: cake
      })
    )
}
