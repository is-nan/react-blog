/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 21:08:04
 * @LastEditTime: 2020-03-24 21:41:19
 * @LastEditors: 南岸有归
 * @Description:
 * @FilePath: \react-blog\src\views\Blog\Layouts\Contents\index.jsx
 * @
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BlogRouter } from "../../../../router";
import '../index.scss'
function Contents() {
  return (
    <div className="Contents">
      <div className="Contents_Router">
      <Switch>
        {BlogRouter.map((Item, index) => {
          return <Route path={Item.path} component={Item.component}/>
        })}
      </Switch>
      </div>
    </div>
  );
}

export default Contents;
