/*
 * @Author: 林俊丞
 * @Date: 2021-09-14 13:09:50
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 13:45:08
 * @Description:
 */
import { fromJS } from "immutable";
import {CHANGE_DETAIL} from "../constant";
// 默认数据
const defaultState = fromJS({
  title: "小丞同学加油噢！",
  content: `<img src="https://ljcimg.oss-cn-beijing.aliyuncs.com/img/banner.jpg" alt="" />
    <p><b>如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错</b></p>
    <p><b>如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错</b></p>
    <p><b>如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错</b></p>
    <p><b>如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错</b></p>`,
  imgUrl: "",
});
export default function detail(state = defaultState, action) {
  const { type } = action;
  switch (type) {
      case CHANGE_DETAIL: 
      console.log(action);
      return state.merge({
          title: action.title,
          content: action.content
      })
    default:
      return state;
  }
}
