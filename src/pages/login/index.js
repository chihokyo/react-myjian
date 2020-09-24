import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Botton } from './style'

class Login extends PureComponent {

  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' />
          <Input placeholder='密码' />
          <Botton>登录</Botton>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login)
