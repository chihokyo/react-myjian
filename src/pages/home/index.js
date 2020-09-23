import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {

  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

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
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  conponentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['homeReducer', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },

  changeScrollShow(e) {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
