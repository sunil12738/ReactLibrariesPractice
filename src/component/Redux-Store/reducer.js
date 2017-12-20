import * as actions from "./action.js"

const initial = {
  click: null,
  counter: 0,
  fetching: false,
  fetched: false,
  data: [],
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
    case actions.INITIATE: {
     const newState = Object.assign({},
        state,
      )
      newState.fetching = false
      newState.fetched = false
      return newState
    }
    case actions.PROGRESS: {
      const newState = Object.assign({},
        state,
      )
      newState.fetching = true
      newState.fetched = false
      return newState
    }
    case actions.SUCCESS: {
      const newState = Object.assign({},
        state,
      )
      newState.fetching = false
      newState.fetched = true
      newState.data = action.data
      return newState
    }
    default:
      return state;
  }

};

export default reducer;
