/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 14:45:19
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 15:08:51
 * @Description:
 */
import styled from "styled-components";
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;
