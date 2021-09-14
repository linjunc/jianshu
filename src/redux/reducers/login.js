/*
 * @Author: 林俊丞
 * @Date: 2021-09-14 14:58:57
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 15:36:38
 * @Description:
 */
import { fromJS } from "immutable";
import { LOGIN, LOGOUT } from "../constant";
const defaultState = fromJS({
  login: false,
});
export default function login(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN:
      return state.set("login", action.value);
    case LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
}
