/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 17:21:45
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 13:10:32
 * @Description:
 */
import {
  BLUR,
  CHANGE_LIST,
  FOCUS,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from "../constant";
import { fromJS } from "immutable";
// immutable 数组
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default function header(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case FOCUS:
      return state.set("focused", true);
    case BLUR:
      return state.set("focused", false);
    case CHANGE_LIST:
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case MOUSE_ENTER:
      return state.set("mouseIn", true);
    case MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
}
