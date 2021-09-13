/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 15:22:14
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 19:29:07
 * @Description:
 */
import styled from "styled-components";
export const WriterWrapper = styled.div`
  position: relative;
  width: 278px;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`;
export const WriterInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const WriterInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const WriterItem = styled.div`
  display: flow-root;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px 0;
  .writer_pic {
    display: block;
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const WriterInfo = styled.div`
  float: left;
  margin-left: 10px;
  h3 {
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
`;
export const WriterAdd = styled.div`
  float: right;
  margin-top: 3px;
  color: #42c02e;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
