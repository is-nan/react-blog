import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Layouts from "./views/admin/Layouts";
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/admin'  component={Layouts}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
