/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 12:27:52
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 13:01:15
 * @Description:
 */
import styled from "styled-components";
export const HomeWrapper = styled.div`
  /* display: flow-root; */
  overflow: hidden;
  width: 960px;
  margin: 0 auto;

`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
    user-select: none;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;
