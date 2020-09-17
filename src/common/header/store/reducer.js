const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    console.log('search_focus')
    return {
      focused: true
    }
  }

  if (action.type === 'search_blur') {
    console.log('search_blur')
    return {
      focused: false
    }
  }
  return state
}
