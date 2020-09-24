import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Botton } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {

  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder='账号'
              ref={(input) => { this.account = input }}
            />
            <Input
              placeholder='密码'
              type='password'
              ref={(input) => { this.password = input }}
            />
            <Botton onClick={() => this.props.login(this.account, this.password)}>登录</Botton>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['loginReducer', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountEle, pwdEle) {
    dispatch(actionCreators.login(accountEle.value, pwdEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login)
