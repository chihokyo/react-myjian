import * as actionTypes from './costants.js'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    console.log('search_focus')
    return {
      focused: true
    }
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    console.log('search_blur')
    return {
      focused: false
    }
  }
  return state
}
