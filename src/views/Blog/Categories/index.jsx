import React,{useState,useEffect} from 'react'
import ArticleList from "../../../components/ArticleList";
import { useParams } from "react-router-dom";
import { FindCategoryList } from "../../../api/Category";

function Categories() {
    //获取路由参数
    const { name } = useParams()
    //列表苏剧
    const [data,setData]=useState([])
    useEffect(()=>{
        //url获取
        FindCategoryList(name)
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

export default Categories