import React,{ Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Layouts from "./views/admin/Layouts";
import Root from './views/Blog/Root/index'
import Home from './views/Blog/Home/index'
import Article from './views/Blog/Article'
import Login from './views/Blog/Login'
import router from "./router";
import store from './redux/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Suspense fallback={<div></div>}>
            <Switch>
                {
                    router.map((Item,index)=>{
                       return <Route path={Item.path} exact  key={index} component={Item.component} />
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
