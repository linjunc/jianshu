/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 17:20:23
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-12 20:19:53
 * @Description: 
 */
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from './reducers/index'

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);