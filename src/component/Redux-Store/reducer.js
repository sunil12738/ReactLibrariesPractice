import * as actions from "./action.js"

const initial = {
  click: null,
  counter: 0,
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actions.I_AM_CLICKED:
      return Object.assign({}, state, click:true)
    case actions.INCREASE:{
      const newState = Object.assign({},
        state,
      )
      newState.counter = state.counter + 1
      return newState
    }
    case actions.DECREASE:{
      const newState = Object.assign({},
        state,
      )
      newState.counter = state.counter - 1
      return newState
    }
    default:
      return state;
  }

};

export default reducer;
