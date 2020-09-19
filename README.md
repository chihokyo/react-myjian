# React项目笔记

## 1. 项目搭建

### 新建项目

```
npx create-react-app react-myjianshu
cd react-myjianshu
```

### Github关联

```
# 关联库
git remote add origin git@github.com:chihokyo/react-myjian.git
git branch -M master
git push -u origin master
# 创建develop分支并推送
git checkout -b develop
git push origin develop
git push --set-upstream origin develop
```

## 2. Header

CSS相关

1. reset.css导入，为了避免不同的浏览器所造成的差异。
2. 第三方模块[styled-components](https://github.com/styled-components/styled-components) 实现局部导入模块or全局导入。

#### 导出

```javascript
import styled from 'styled-components'
// 由于默认字符串，导入路径 (${logoPic}
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  z-index: 5;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
```

#### 导入

```javascript
import { HeaderWrapper, Logo } from './style.js'
<HeaderWrapper>
        <Logo />
</HeaderWrapper>
```

## 3. Redux来管理state和props

引入redux组件Provide方法进行管理状态 

#### *App.js*

```javascript
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}
```

#### 新建*store/index.js*

```javascript
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
```

#### 新建*store/reducer.js*

```javascript
const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    console.log('search_focus')
    return {
      focused: true
    }
  }

  if (action.type === 'search_blur') {
    console.log('search_blur')
    return {
      focused: false
    }
  }
  return state
}
```

#### 修改组件

```javascript
// 1. 引入
import { connect } from 'react-redux'
// 2. 添加connect固定写法
export default connect(mapStateToProps, mapDispatchToProps)(Header)
// 3. 写方法
const mapStateToProps = (state) => {
// 3-1. 添加数据（想要这个组件用什么数据）
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 3-2 组件事件
    handleInputFocus () {
      console.log('handleInputFocus')
      // 3-3 要求store修改的action
      const action = {
        type: 'search_focus'
      }
      // 3-4 分发出去
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
// 修改jsx
<NavSearch
  className={this.state.focused ? 'focused' : ''}
  onFocus={this.handleInputFocus}
  onBlur={this.handleInputBlur}
></NavSearch>

<NavSearch
  className={props.focused ? 'focused' : ''}
  onFocus={props.handleInputFocus}
  onBlur={props.handleInputBlur}
></NavSearch>
```

#### 关于组件拆分

```shell
# 一个组件的整体构造如下。
├── App.js
├── common
│   └── header
│       ├── index.js							# UI组件
│       ├── store
│       │   ├── actionCreators.js #	定义action type（其中引入常量文件costants.js)
│       │   ├── costants.js  			# 定义action常量
│       │   ├── index.js					# 暴露header其他组件（reducer,actioncreator,costants）
│       │   └── reducer.js				# 定义默认数据，操作action type逻辑。（其中引入常量文件costants.js）
│       └── style.js 							# 书写局部样式
├── store
│   ├── index.js
│   └── reducer.js							# 整合其他组件reducer（比如把header所有导入）
└── style.js
```

顺便记录一下如何在tree个目录吧。

```shell
$ brew install tree
$ tree -L 2 -I "node_modules" # 不包含node_modules文件形成2级tree
```

为了解决一不小心修改了state这个行为。

引入了*immutable.js*

*immutable.js* → 可以生成一个*immutable*对象 → *immutable*不可改变 → 把*state*转换成*immutable*

```
npm install immutable
```

**因为不可修改的对象，所以在修改数据的时候获取和设置的时候需要修改方法。**

```javascript
// 1. 引入包
import { fromJS } from 'immutable'
// 2. fromJS（）包裹数据
const defaultState = fromJS({
  focused: false
})

// 3. get()获取
// focused: state.headerReducer.focused → focused: state.headerReducer.get('focused')
const mapStateToProps = (state) => {
  return {
    focused: state.headerReducer.get('focused')
  }
}
// 4. set()修改
// return {focused: true} → return state.set('focused', true)
return state.set('focused', true)
```

因为按照上面获取

state JS对象，state.headerReducer是*immutable*对象，

为了统一成*immutable*对象。导入新的第三方模块

修改reducer文件

```javascript
// 1. 修改导入模块 其他不变
import { combineReducers } from 'redux-immutable'
// 2. 修改调用方法
return {
 		// focused: state.headerReducer.get('focused')
    // focused: state.get('headerReducer').get('focused')
    focused: state.getIn(['headerReducer', 'focused'])
}
```



