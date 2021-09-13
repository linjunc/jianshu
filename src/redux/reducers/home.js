/*
 * @Author: 林俊丞
 * @Date: 2021-09-13 13:03:44
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 22:38:19
 * @Description: home 页面 reducer
 */
import { fromJS } from "immutable";
import { nanoid } from "nanoid";
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST ,SHOW_TOGGLE} from "../constant";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll:false,
  writerList: [
    {
      id: nanoid(),
      imgUrl: "https://ljcimg.oss-cn-beijing.aliyuncs.com/img/banner.jpg",
      name: "小丞同学",
      desc: "写了110篇 · 3k喜欢",
    },
    {
      id: nanoid(),
      imgUrl: "https://ljcimg.oss-cn-beijing.aliyuncs.com/img/banner.jpg",
      name: "小丞同学",
      desc: "写了110篇 · 3k喜欢",
    },
    {
      id: nanoid(),
      imgUrl: "https://ljcimg.oss-cn-beijing.aliyuncs.com/img/banner.jpg",
      name: "小丞同学",
      desc: "写了110篇 · 3k喜欢",
    },
  ],
});
export default function home(state = defaultState, action) {
  const { type, topicList, articleList, recommendList } = action;
  switch (type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(topicList),
        articleList: fromJS(articleList),
        recommendList: fromJS(recommendList),
      });
    case ADD_ARTICLE_LIST:
      return state.merge(
        {
          articleList: state.get("articleList").concat(action.list),
        },
        {
          articlePage: action.nextPage,
        }
      );
      case SHOW_TOGGLE: 
      return state.set('showScroll',action.show)
      default:
      return state;
  }
}
