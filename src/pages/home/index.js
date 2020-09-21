import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg' alt='banner' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home
