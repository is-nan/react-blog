/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 21:12:20
 * @LastEditTime: 2020-03-24 21:41:49
 * @LastEditors: 南岸有归
 * @Description:
 * @FilePath: \react-blog\src\views\Blog\Layouts\index.jsx
 * @
 */
import React from "react";
import Contents from "./components/Contents";
import Information from "./components/Sidebar";
import NavTabs from './components/NavTabs'
import './index.scss'
function Layout() {
  return (
    <div className="Layouts">
      <Information />
      <div className="Main">
      <NavTabs />
      <Contents />
      </div>
    </div>
  );
}

export default Layout;
