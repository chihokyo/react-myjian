import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
class Detail extends Component {

  componentDidMount() {
    this.props.getDetail()
  }

  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detailReducer', 'title']),
  content: state.getIn(['detailReducer', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetailData())
  }
})

export default connect(mapState, mapDispatch)(Detail)
