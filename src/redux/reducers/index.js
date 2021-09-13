/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 17:21:45
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 13:08:23
 * @Description:
 */
import header from "./header";
import home from "./home";
// 从immutable中引入
import { combineReducers } from "redux-immutable";
export default combineReducers({
  header,
  home,
});
