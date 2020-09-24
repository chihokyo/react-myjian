import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DATA:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
