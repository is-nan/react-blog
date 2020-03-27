/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 20:56:07
 * @LastEditTime: 2020-03-24 21:38:32
 * @LastEditors: 南岸有归
 * @Description:
 * @FilePath: \react-blog\src\App.js
 * @
 */
import React, { lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Blog, Admin } from "./router";
import store from "./redux/index";
import { Provider } from "react-redux";
import Loading from "./components/Loading";
const NavTabs = lazy(()=>import ('./views/Blog/Layouts/components/NavTabs'))
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/*路由过渡动画*/}
          <Suspense fallback={<div><Loading /></div>}>
            <Switch>
              {/*后台路由*/}
              <Route path={Admin.path} component={Admin.component} />
              <Route path="/NavTabs" component={NavTabs}/>
              {/*博客路由*/}
              <Route path={Blog.path} component={Blog.component} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
