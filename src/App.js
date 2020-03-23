import React,{ lazy,Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { Blog,BlogRouter,Admin } from "./router";
import store from './redux/index'
import { Provider } from 'react-redux'
const Layouts=lazy(() => import('./views/admin/Layouts'))
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            {/*路由过渡动画*/}
            <Suspense fallback={<div></div>}>
            <Switch>
                {/*后台路由*/}
                <Route path={Admin.path} component={Admin.component}/>
                {/*博客路由*/}
                <Route path={Blog.path} component={Blog.component} exact/>
                {
                    BlogRouter.map((Item,index)=>{
                        return <Route path={Item.path} component={Item.component} key={index} exact/>
                    })
                }
                <Redirect from="*" to="/404"></Redirect>
            </Switch>
            </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
