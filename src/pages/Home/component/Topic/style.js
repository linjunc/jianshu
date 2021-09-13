/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 12:52:28
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 13:45:41
 * @Description:
 */
import styled from "styled-components";
// 话题按钮大容器
export const TopicWrapper = styled.div`
  display: flow-root;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
// 每一个话题组件 以及 图片
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  background-color: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    margin-right: 10px;
    height: 32px;
    margin-right: 10px;
  }
`;
