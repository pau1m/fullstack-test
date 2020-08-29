import { FETCH_CAKES, ADD_CAKE} from '../actions/types'

const initialState = {
  cakes: []
  // cake: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAKES:
      return {
        ...state,
        items: action.payload
      };
    case ADD_CAKE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
