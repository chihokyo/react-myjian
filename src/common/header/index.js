import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js'

import { CSSTransition } from 'react-transition-group'

class Header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      focused: false
    }
  }

  handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }

  handleInputBlur = () => {
    console.log('handleInputBlur')
    this.setState({
      focused: false
    })
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
           <i className="fas fa-search">Aa</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>写文章</Button>
          <Button className='register'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
