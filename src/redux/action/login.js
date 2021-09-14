/*
 * @Author: 林俊丞
 * @Date: 2021-09-14 14:58:33
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 15:55:19
 * @Description:
 */
import axios from "axios";
import { LOGIN, LOGOUT } from "../constant";
const changeLogin = () => ({
  type: LOGIN,
  value: true,
});
export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password" + password)
      .then((res) => {
        const result = res.data.data;
        result ? dispatch(changeLogin()) : console.log("登录失败");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const logoutAction = () => ({
  type: LOGOUT,
  value: false,
});
