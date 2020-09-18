import * as actionTypes from './costants.js'
// JS → 转换成 immutable对象
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    console.log('search_focus')
    // return {
    //   focused: true
    // }
    // immutable对象 set方法 结合之前的值和设置的值 返回一个全新的对象，并不会修改之前的数据。
    return state.set('focused', true)
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    console.log('search_blur')
    // return {
    //   focused: false
    // }
    return state.set('focused', false)
  }
  return state
}
