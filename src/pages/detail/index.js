import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>这里是详情页的标题：详情页的标题呢</Header>
        <Content>
          <img src='https://www.gamebyte.com/wp-content/uploads/2018/11/Naturo-to-Boruto-shinobi.jpeg' alt='img' />
          <p><b>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</b></p>
          <p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p>
          <p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p>
          <p>这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容这里是详情内容</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail
