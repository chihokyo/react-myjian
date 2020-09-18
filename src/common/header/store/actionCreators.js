import * as actionTypes from './costants.js'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})


export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const listData = res.data
        dispatch(changeList(listData.data))
      })
      .catch((error) => {
        console.log(error + 'error')
      })
  }
}
