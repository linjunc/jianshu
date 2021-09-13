/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 19:02:21
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 22:43:08
 * @Description:
 */
import axios from "axios";
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, SHOW_TOGGLE } from "../constant";
import { fromJS } from "immutable";
const addHomeList = (list, nextPage) => ({
  type: ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage,
});
export const changeHomeData = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        const result = res.data.data;
        const action = {
          type: CHANGE_HOME_DATA,
          topicList: result.topicList,
          articleList: result.articleList,
          recommendList: result.recommendList,
        };
        dispatch(action);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const changeScrollTopShow = (show) => ({
  type: SHOW_TOGGLE,
  show,
});
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};
