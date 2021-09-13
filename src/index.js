/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 13:53:04
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-12 17:51:11
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
