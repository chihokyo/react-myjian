import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style.js'

import { CSSTransition } from 'react-transition-group'

import * as actionCreators from './store/actionCreators'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

class Header extends Component {

  getListArea = (show) => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }}>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <i className="fas fa-search">Aa</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>写文章</Button>
            <Button className='register'>注册</Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('headerReducer').get('focused')
    focused: state.getIn(['headerReducer', 'focused']),
    list: state.getIn(['headerReducer', 'list']),
    page: state.getIn(['headerReducer', 'page']),
    totalPage: state.getIn(['headerReducer', 'totalPage']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn']),
    login: state.getIn(['loginReducer', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // 在这里获取ajax数据 → redux-thunk
      // if(list.size === 0) {
      //   dispatch(actionCreators.getList())
      // }
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      console.log('handleInputBlur')
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      console.log('handleMouseEnter')
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      console.log('handleMouseLeave')
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
