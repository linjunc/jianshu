/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 14:23:21
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 22:54:33
 * @Description:
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";
// 头部大容器
export const HeaderWrapper = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  float: left;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
// 导航控件
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 100px;
  box-sizing: border-box;
  margin: 0 auto;
`;
// 空间列表
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
// 搜索框容器
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.focused {
      background: #777;
      color: #fff;
    }
    /* background-color: green; */
    /* 预留动画背景色 */
  }
`;
// 搜索框
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: all 0.2s ease-out;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;
// 搜索弹出框
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
// 弹出框标题
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
// 换一换按钮
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
// 弹出框内容
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 2px;
`;
// 写文章按钮
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
// 两个按钮
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
