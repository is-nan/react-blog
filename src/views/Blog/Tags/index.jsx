import React,{useState,useEffect} from 'react'
import ArticleList from "../../../components/ArticleList";
import { useParams } from "react-router-dom";
import { FindTags } from "../../../api/Tag";

function Tags() {
    //获取路由参数
    const { name } = useParams()
    //列表数据
    const [data,setData]=useState([])
    useEffect(()=>{
        FindTags(name)
            .then((res)=>{
                setData(res.data.data)
            })
    },[])
    return (
        <div>
            <ArticleList type={name} data={data}/>
        </div>
    )
}

export default Tags