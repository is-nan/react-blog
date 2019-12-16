import React,{useState} from "react";
import { Table } from 'antd';
const columns = [
    {
        title: '文章标题',
        dataIndex: 'A',
        key: 'A',
    },
    {
        title: '副标题',
        dataIndex: 'B',
        key: 'B',
    },
    {
        title: '作者',
        dataIndex: 'C',
        key: 'C',
    },
    {
        title: '发布日期',
        dataIndex: 'D',
        key: 'D',
    },
    {
        title: '发布时间',
        dataIndex: 'E',
        key: 'E',
    },
    {
        title: '状态',
        dataIndex: 'F',
        key: 'F',
    },
    {
        title: '标签',
        dataIndex: 'G',
        key: 'G',
    }
];
function ArticleTable(props) {
    //文章数据
    const [data,setdata]=useState([])
    return(
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default ArticleTable