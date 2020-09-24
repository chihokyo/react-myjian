import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #f0f0f0;
  height: 56px;
  background: #fff;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: 768px;
  max-width: 1440px;
`;

export const Logo = styled.div`
  position: absolute;
  width: 100px;
  height: 100%;
  background: url(${logoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  margin: 0 auto;
  padding-right: 40px;
  width: 960px;
`;

export const NavItem = styled.div`
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
    margin-right: 10px;
    line-height: 56px;
  }
  &.right {
    float: right;
    font-size: 15px;
    line-height: 57px;
    color: #969696;
    .icon-Aa {
      margin-right: 0.3em;
      font-size: 1.1em;
    }
  }
  &.active {
    color: #ea6f5a;
  }
  &.hover:hover {
    background: #f5f5f5;
  }
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin: 9px 15px;
  border: 1px solid #eee;
  border-radius: 40px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  color: #333;
  background: #eee;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: width 0.4s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width 0.4s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchIconWrapper = styled.a`
  display: inline-block;
  position: relative;
  right: 50px;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  &.focused {
    border-radius: 50%;
    background: #969696;
    .icon-search {
      color: #fff;
    }
  }
  .icon-search {
    width: 1em;
    height: 1em;
    color: #969696;
    margin-top: 7px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 15px;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const SearchInfoWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 20px 10px;
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 10px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.a`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;

export const SearchInfoList = styled.ul`
  font-size: 0;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  line-height: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  padding: 0 5px;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.div`
  float: right;
  border: 1px solid #ec6149;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  &.writting {
    margin: 8px 15px 0;
    width: 100px;
    line-height: 38px;
    color: #fff;
    background: #ea6f5a;
    .icon-writting {
      vertical-align: -0.2em;
      margin-right: 0.2em;
    }
  }
  &.register {
    margin: 9px 5px 0 15px;
    width: 80px;
    line-height: 36px;
    color: #ea6f5a;
  }
  &.register:hover {
    border-color: #ec6149;
    color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
  }
`;
