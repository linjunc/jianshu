/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 18:02:30
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 19:04:40
 * @Description:
 */
import {
  FOCUS,
  BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from "../constant";
import { fromJS } from "immutable";
import axios from "axios";
export const focusFlagAction = () => ({
  type: FOCUS,
});

export const blurFlagAction = () => ({
  type: BLUR,
});
export const changeList = (data) => ({
  type: CHANGE_LIST,
  // 转为immutable数组
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});
export const mouseEnter = () => ({
  type: MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: MOUSE_LEAVE,
});
export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});
export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        const action = changeList(data.data);
        dispatch(action);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
