import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 3,
      title: '随便',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
  ],
  articleList: [
    {
      id: 1,
      title: '这里是标题这里是标题这里是标题这里是标题',
      desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 2,
      title: '这里是标题这里是标题这里是标题这里是标题',
      desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 3,
      title: '这里是标题这里是标题这里是标题这里是标题',
      desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 4,
      title: '这里是标题这里是标题这里是标题这里是标题',
      desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 2,
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    },
    {
      id: 3,
      imgUrl: 'https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg'
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
