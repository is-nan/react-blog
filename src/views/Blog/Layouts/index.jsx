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
import Contents from "./Contents";
import Information from "../../../components/Information";
function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Information />
      <Contents />
    </div>
  );
}

export default Layout;
