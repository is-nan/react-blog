/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 20:56:07
 * @LastEditTime: 2020-03-27 17:50:18
 * @LastEditors: 南岸有归
 * @Description:
 * @FilePath: \react-blog\src\views\Blog\Home\index.jsx
 * @
 */
import React, { useEffect, useState } from "react";
import "./index.scss";
import { GetReleaseArticle } from "../../../api/Article";
import { Icon } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale();
//阿里icon自定义图标
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1710871_fzogmiqut6k.js"
});

function Home(props) {
    //History跳转
    const history = useHistory();
    const [Data, setData] = useState([]);
    useEffect(() => {
        //页面初始化获取所有发布的文章
        GetReleaseArticle().then(res => {
            setData(res.data.data);
        });
    }, []);
    return (
            <div className="ArticleList">
                {Data.map(Item =>{
                    return (
                        <div className="ArticleList_Item" key={Item.id}>
                            <div className="ArticleList_Item__Article">
                                <h2 className="ArticleList_Item__Title" onClick={() => {
                                    history.push(`/ArticleDetails/${Item.id}`);
                                    }}>
                                    {Item.title}
                                </h2>
                                <p className="ArticleList_Item__Excerpt">
                                    {Item.content.replace(/[#]/g, "")}
                                </p>
                                <div style={{ color: "#c7c7c7", fontSize: 0.8 + "rem" }}>
                                    <span>
                                        <IconFont type="icon-taiyang" className="ArticleList_Item__Icon"/>
                                    </span>
                                    <span className="ArticleList_Item__Date">
                                        {moment(Item.createdTime).add(10, "days").calendar()}
                                    </span>
                                    {/* 分类 */}
                                    <span>
                                        <IconFont type="icon-duihaoqipao2" className="ArticleList_Item__Icon"/>
                                    </span>
                                    {Item.Categories.map((Items, index) => {
                                        return (
                                            <span className="ArticleList_Item__Tags" key={index}>
                                                {Items.CategoryName}
                                            </span>
                                        );
                                    })}
                                    {/* 标签 */}
                                    <span>
                                        <IconFont type="icon-biaoqian" className="ArticleList_Item__Icon"/>
                                    </span>
                                    {Item.Tags.map((Items, index) => {
                                        return (
                                            <span className="ArticleList_Item__Tags" key={index}>
                                                {Items.TagName}
                                            </span>
                                        );
                                    })}
                                    <span className="ArticleList_Item__ContinueReading"
                                        onClick={() => {history.push(`/ArticleDetails/${Item.id}`);}}>
                                        继续阅读
                                    </span>
                                </div>
                                {/*<hr className="ArticleList_Item__divider" />*/}
                            </div>
                            <div className="ArticleList_Item__cover" onClick={() => {
                                history.push(`/ArticleDetails/${Item.id}`);
                            }} style={{ backgroundImage: `url(${Item.Cover})` }}
                            ></div>
                        </div>
                    );
                })}
            </div>
    );
}

export default Home;
