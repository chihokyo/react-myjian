import { combineReducers } from 'redux'
// // 一般写法
// import headerReducer from '../common/header/store/reducer.js'
// 优化写法
import { headerReducer } from '../common/header/store'
// export default combineReducers({
//   headerReducer: headerReducer
// })


const reducer = combineReducers({
  headerReducer: headerReducer
})

export default reducer
