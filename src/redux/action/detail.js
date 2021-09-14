/*
 * @Author: 林俊丞
 * @Date: 2021-09-14 13:09:59
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 14:06:04
 * @Description:
 */
import axios from "axios";
import { CHANGE_DETAIL } from "../constant";
const changeDetail = (title, content) => ({
  type: CHANGE_DETAIL,
  title,
  content,
});
export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    });
  };
};
