import axios from 'axios'
import * as actionTypes from './constants'

const changeDetailData = (title, content) => ({
  type: actionTypes.CHANGE_DATA,
  title,
  content
})

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        const result = res.data.data
        dispatch(changeDetailData(result.title, result.content))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
