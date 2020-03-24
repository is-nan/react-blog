/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 20:56:07
 * @LastEditTime: 2020-03-24 21:23:17
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \react-blog\src\views\Blog\Home\index.jsx
 * @
 */
import React, { useEffect, useState } from 'react'
import './index.scss'
import { GetReleaseArticle } from '../../../api/Article'
import Information from '../../../components/Information/index'
import { Icon } from 'antd';
import { useHistory } from "react-router-dom";
//阿里icon自定义图标
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1710871_fzogmiqut6k.js',
})

function Home(props) {
    //History跳转
    const history = useHistory();
    const [Data, setData] = useState([])
    useEffect(() => {
        //页面初始化获取所有发布的文章
        GetReleaseArticle()
            .then((res) => {
                setData(res.data.data)
            })
    }, [])
    return ( <
        div style = {
            { display: 'flex' }
        } >
        <
        div className = "ArticleList" > {
            Data.map((Item) => {
                    return ( <
                        div className = "ArticleList_Item"
                        key = { Item.id } >
                        <
                        div className = "ArticleList_Item__Article" >
                        <
                        h2 className = "ArticleList_Item__Title"
                        onClick = {
                            () => { history.push(`/ArticleDetails/${Item.id}`) }
                        } > { Item.title } < /h2> <
                        p className = "ArticleList_Item__Excerpt" >
                        距离上一次写年终总结已经过去四年时间了。 在人生中带上两个小朋友以后， 远游这种事情的难度就高企不下了。 一年里除了工作以外， 活动的轨迹多半也都落在了以家为圆心两公里为半径的圆周里。 看着小朋友们一天天长大， 在被她们的想象力和好奇心折服的同时， 也不可避免地感觉到了自己的“ 成熟”… 嗯， 或者直白些， 不可避免地感觉到了自己在变老。 对我来说， 2019 年是很有意思的一年， 它是充满“ 矛盾” 的一年。 我能认知的世界在变大， 但我实际生活的圈子却在变小。 世界的变动非常剧烈， 在中美争霸背景下， 被时代洪流的裹挟向前的我... <
                        /p> <
                        div style = {
                            { color: '#c7c7c7', fontSize: .8 + 'rem' }
                        } >
                        <
                        span > < IconFont type = "icon-taiyang"
                        className = "ArticleList_Item__Icon" / > < /span> <
                        span className = "ArticleList_Item__Date" > { Item.createdTime } < /span>

                        { /* 分类 */ } <
                        span > < IconFont type = "icon-duihaoqipao2"
                        className = "ArticleList_Item__Icon" / > < /span> {
                        Item.Categories.map((Items, index) => {
                            return <span className = "ArticleList_Item__Tags"
                            key = { index } > { Items.CategoryName } < /span>
                        })
                    }

                    { /* 标签 */ } <
                    span > < IconFont type = "icon-biaoqian"
                    className = "ArticleList_Item__Icon" / > < /span> {
                    Item.Tags.map((Items, index) => {
                        return <span className = "ArticleList_Item__Tags"
                        key = { index } > { Items.TagName } < /span>
                    })
                } <
                span className = "ArticleList_Item__ContinueReading"
                onClick = {
                    () => { history.push(`/ArticleDetails/${Item.id}`) }
                } >
                继续阅读 < /span> < /
                div > { /*<hr className="ArticleList_Item__divider" />*/ } <
                /div> <
                div className = "ArticleList_Item__cover"
                onClick = {
                    () => { history.push(`/ArticleDetails/${Item.id}`) }
                }
                style = {
                    { backgroundImage: `url(${Item.Cover})` }
                } > < /div> < /
                div >
            )
        })
} <
/div> < /
div >
)
}

export default Home