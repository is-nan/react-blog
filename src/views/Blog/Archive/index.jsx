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
function Archive(props){
  // 列表数据
  const [data,setData]=useState()
  // 获取列表数据
  useEffect(()=>{
    GetReleaseArticle()
    .then((res)=>{
      console.log(res.data.data)
      setData(res.data.data)
    })
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Archive
