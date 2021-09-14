/*
 * @Author: 林俊丞
 * @Date: 2021-09-12 13:56:30
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-09-14 16:17:58
 * @Description:
 */
import React, { PureComponent, Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
// 引入路由组件
import Header from "./common/Header";
// import Detail from "./pages/Detail";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Write from "./pages/Write";

// 懒加载路由
// const Header = lazy(() => import("./common/Header"));
const Detail = lazy( () => import("./pages/Detail"));
const Home = lazy( () => import("./pages/Home"));
const Login = lazy( () => import("./pages/Login"));
const Write = lazy(() => import("./pages/Write"));
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Suspense fallback={<h1>loading...</h1>}>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/detail/:id" component={Detail}></Route>
              <Route path="/write" component={Write}></Route>
            </Suspense>
          </Fragment>
        </BrowserRouter>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
