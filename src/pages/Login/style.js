/*
 * @Author: 林俊丞
 * @Date: 2021-09-14 14:09:15
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 14:55:21
 * @Description:
 */
import styled from "styled-components";
import "../../../node_modules/antd/dist/antd.css";
export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  z-index: 0;
  background: #eee;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 320px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  .login-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 37px 0;
  }
  .login-form-button {
    width: 100%;
  }
`;
