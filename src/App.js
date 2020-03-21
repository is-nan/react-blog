import React,{ lazy,Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import router from "./router";
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
                <Route path={router.AdminRouter.path}>
                    <Layouts>
                    {router.AdminRouter.children.map((Item,index)=>{
                        return <Route path={Item.path}  key={index} component={Item.component}/>
                    })}
                    </Layouts>
                    <Redirect from="*" to="/404"></Redirect>
                </Route>
                {/*博客路由*/}
                {
                    router.BlogRouter.map((Item,index)=>{
                        return <Route path={Item.path} exact  key={index} component={Item.component}/>
                    })
                }
            </Switch>
            </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
