/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 14:59:44
 * @LastEditTime: 2020-03-24 15:22:31
 * @LastEditors: 南岸有归
 * @Description: 归档页面
 * @FilePath: \cloud_frontendd:\react\react-blog\src\views\Blog\Archive\index.jsx
 * @
 */
import React,{ useState,useEffect } from 'react'
import { GetReleaseArticle } from '../../../api/Article'
import './index.scss'
import moment from 'moment';
import 'moment/locale/zh-cn';
import {useHistory} from "react-router-dom";
moment.locale()
function Archive(props){
  const history=useHistory()
  // 列表数据
  const [data,setData]=useState([])
  // 年份数据
  const [Year,setYear]=useState([])
  // 获取列表数据
  useEffect(()=>{
    GetReleaseArticle()
    .then((res)=>{
      //获取年份并且去重
      setYear(Array.from(new Set(res.data.data.map((Item,index)=>{return Item.createdTime.split('-')[0]}))))
      //获取列表数据
      setData(res.data.data)
    })
  },[])
  const GetTime=(Year,data)=>{
    if(data.createdTime.includes(Year)){
      return (
          <p key={data.id}>
            <span>{data.title}</span>
            <span>{data.createdTime}</span>
          </p>
      )
    }else {
      return null
    }
  }
  return (
    <div className="Archive">
      {
        Year.map((Item,index)=>{
          return (
              <div key={index}>
                <p className="Archive-Year">{Item}</p>
                {
                  data.map((Items)=>{
                    return (
                        Items.createdTime.includes(Item)?<p key={Items.id} className="Archive_Item">
                          <span className="Archive_Item__Title"
                          onClick={()=>{history.push(`/ArticleDetails/${Items.id}`)}}
                          >{Items.title}</span>
                          <span className="Archive_Item_Date">{moment(Items.createdTime).calendar()}</span>
                        </p>:null
                    )
                  })
                }
              </div>
          )
        })
      }
    </div>
  )
}

export default Archive
