/*
 * @Author: 南岸有归
 * @Date: 2020/3/30
 * @LastEditTime: 2020/3/30
 * @LastEditors: 南岸有归
 * @Description: 归档、分类、标签列表组件,接收一个type:String，接收一个data:Array
 * @FilePath: D:\react\react-blog\src\components\ArticleList\index.jsx
 * @
 */
import React,{ useState,useEffect } from 'react'
import './index.scss'
import moment from 'moment';
import 'moment/locale/zh-cn';
import { useHistory,useParams } from "react-router-dom";
moment.locale()

function ArticleList(props) {
    //编程式路由跳转
    const history=useHistory()
    // 年份数据
    const [Year,setYear]=useState([])
    // 获取列表数据
    useEffect(()=>{
        //组件类型为归档
        if(props.type==='Archive'){
            //筛选出年份
            setYear(Array.from(new Set(props.data.map((Item,index)=>{return Item.createdTime.split('-')[0]}))))
        }
    },[props.data])
    return (
        <div className="ArticleList">
            {
                props.type==='Archive'?
                Year.map((Item,index)=>{
                    return (
                        <div key={index}>
                            <p className="ArticleList_Year">{Item}</p>
                            {
                                props.data.map((Items)=>{
                                    return (
                                        Items.createdTime.includes(Item)?<p key={Items.id} className="ArticleList_Item">
                          <span className="ArticleList_Item__Title"
                                onClick={()=>{history.push(`/ArticleDetails/${Items.id}`)}}
                          >{Items.title}</span>
                                            <span className="ArticleList_Item_Date">{moment(Items.createdTime).format("MMMDo")}</span>
                                        </p>:null
                                    )
                                })
                            }
                        </div>
                    )
                }):<div>
                        <p className="ArticleList_Year">{props.type}</p>
                        {
                            props.data.map((Items)=>{
                                return (
                                    <p key={Items.id} className="ArticleList_Item">
                          <span className="ArticleList_Item__Title"
                                onClick={()=>{history.push(`/ArticleDetails/${Items.id}`)}}
                          >{Items.title}</span>
                                        <span className="ArticleList_Item_Date">{moment(Items.createdTime).format("YYYY/MM/DD")}</span>
                                    </p>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default ArticleList
