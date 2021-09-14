/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 17:21:45
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 15:02:52
 * @Description:
 */
import header from "./header";
import home from "./home";
import detail from "./detail";
import login from "./login"
// 从immutable中引入
import { combineReducers } from "redux-immutable";
export default combineReducers({
  header,
  home,
  detail,
  login
});
