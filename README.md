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

### 导出

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

