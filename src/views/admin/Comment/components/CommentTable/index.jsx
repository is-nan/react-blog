import React,{useEffect,useState,useContext} from 'react'
import {Button, Divider, Table} from "antd";
import { CommentData } from "../../index";

function CommentTable(props) {
    const { Data,setData }=useContext(CommentData)
    //表格格式与操作
    const columns = [
        {
            title: '评论/留言内容',
            dataIndex: 'content'
        },
        {
            title: '评论/留言名',
            dataIndex: 'username'
        },
        {
            title: '个人地址',
            dataIndex: 'url'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },
        {
            title: '留言时间',
            dataIndex: 'createdAt'
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (text, record) =>{
                return (
                    <div>
                        <Button type="primary" size="small" onClick={()=>{
                            setData({...Data,CommentId:record.id,ArticleId:record.ArticleId,content:`@${record.username} `})
                            props.AddAndSetLinkFun()
                        }}>回复{record.index}</Button>
                        <Divider type="vertical" />
                        <Button type="danger" size="small" onClick={()=>{
                            props.DeleComment(record.id)
                        }}>删除{record.index}</Button>
                    </div>
                )
            }
        }
    ]
    return(
        <div>
            <Table rowKey="id" dataSource={props.data} columns={columns}/>
        </div>
    )
}

export default CommentTable