/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 13:25:53
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 12:58:56
 * @Description: 文章列表页面样式
 */
import styled from "styled-components";
// 文章大容器以及头图
export const ListItem = styled.div`
  padding: 20px 0;
  display: flow-root;
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 8px;
  }
`;
// 文章介绍内容，头部和概要
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 12px;
    color: #999;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
  user-select: none;
`;
