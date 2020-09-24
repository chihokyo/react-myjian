import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  title: '111',
  content: '<img src="https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg" alt="img" /><p><b>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</b></p><p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p><p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p><p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p>',
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
