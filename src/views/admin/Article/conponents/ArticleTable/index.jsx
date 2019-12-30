import React,{useState,useEffect} from "react";
import { Table } from 'antd';
import { GetReleaseArticle } from "../../../../../api/Article";

const columns = [
    {
        title: '文章标题',
        dataIndex: 'title',
    },
    {
        title: '作者',
        dataIndex: 'id',
    },
    {
        title: '发布日期',
        dataIndex: 'createdTime',
    },
    {
        title: '状态',
        dataIndex: 'status',
    },
    {
        title: '标签',
        dataIndex: 'id',
        key: 'G',
    }
];
function ArticleTable(props) {
    useEffect(()=>{
        GetArticle()
    },[])
    const GetArticle=()=>{
        GetReleaseArticle()
            .then((res)=>{
                setdata(res.data.data)
            })
    }
    //文章数据
    const [data,setdata]=useState([])
    return(
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default ArticleTable