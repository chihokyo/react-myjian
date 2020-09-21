import { combineReducers } from 'redux-immutable'
// // 一般写法
// import headerReducer from '../common/header/store/reducer.js'
// 优化写法
import { headerReducer } from '../common/header/store'
// export default combineReducers({
//   headerReducer: headerReducer
// })
import { homeReducer } from '../pages/home/store'

const reducer = combineReducers({
  headerReducer: headerReducer,
  homeReducer: homeReducer
})

export default reducer
