import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js'

import { CSSTransition } from 'react-transition-group'

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
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
// class Header extends Component {

//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className='left active'>首页</NavItem>
//           <NavItem className='left'>下载APP</NavItem>
//           <NavItem className='right'>登录</NavItem>
//           <NavItem className='right'>
//            <i className="fas fa-search">Aa</i>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.focused}
//               timeout={200}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={this.props.focused ? 'focused' : ''}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               ></NavSearch>
//             </CSSTransition>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className='writting'>写文章</Button>
//           <Button className='register'>注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      console.log('handleInputFocus')
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur () {
      console.log('handleInputBlur')
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
