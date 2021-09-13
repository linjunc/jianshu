/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 13:56:30
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-13 22:56:00
 * @Description:
 */
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/Header";
// 引入路由组件
import Detail from "./pages/Detail";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail" component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
