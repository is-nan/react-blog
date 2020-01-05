import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Layouts from "./views/admin/Layouts";
import store from './redux/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/admin'  component={Layouts}></Route>
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
