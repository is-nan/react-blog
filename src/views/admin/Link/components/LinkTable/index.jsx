import React, {useState, useEffect, useContext} from 'react'
import { Table,Button,Divider} from 'antd';
import {LinkData} from "../../index";

//友情链接表格
function LinkTable(props) {
    //使用共享数据
    const {Data,setData}=useContext(LinkData)
    const columns = [
        {
            title: '博客名称',
            dataIndex: 'name'
        },
        {
            title: '博客地址',
            dataIndex: 'url'
        },
        {
            title: '博主邮箱',
            dataIndex: 'email'
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (text, record) =>{
                return (
                    <div>
                        <Button type="primary" size="small" onClick={()=>{
                            setData({...Data,id:record.id,name:record.name,url:record.url,email:record.email})
                            props.AddAndSetLinkFun()
                        }}>修改{record.index}</Button>
                        <Divider type="vertical"/>
                        <Button type="danger" size="small" onClick={()=>{props.DeleteLinks(record.id)}}>删除{record.index}</Button>
                    </div>
                )
            }
        }
    ]
    return(
        <div>
            <Table rowKey="id" dataSource={props.data} columns={columns} />
        </div>
    )
}

export default LinkTable