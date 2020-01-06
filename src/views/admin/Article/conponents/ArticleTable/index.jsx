import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd';
import { GetArticle,UpdateArticleStatus } from "../../../../../api/Article";
import { Tag,Switch,message,Button,Divider } from 'antd'
import { ArticleData } from '../../index'
function ArticleTable(props) {
  //使用共享数据
  const {Data,setData}=useContext(ArticleData)
  //文章数据
  //表格格式与操作
  const columns = [
    {
      title: '文章标题',
      dataIndex: 'title'
    },
    {
      title: '发布日期',
      dataIndex: 'createdTime'
    },
    {
      title:'作者',
      dataIndex:'Author'
    },
    {
      title:'分类',
      dataIndex:'Categories',
      render:(text, record)=>{
        return (
          record.Categories.map((val,index)=>{
            return val.CategoryName
          })
        )
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'index',
      render:(text, record,index)=>{
        return(
          <Switch defaultChecked checkedChildren="发布" unCheckedChildren="草稿" checked={record.status==1||record.status==true?true:false}
          onChange={()=>{props.UpArticleStatus(record)}}/>
        )
      }
    },
    {
      title: '标签',
      dataIndex: 'Tags',
      render: Tags =>(
        <span>
        {
          Tags.map((val,index)=>{
            return <Tag color="#2db7f5" key={index}>{val.TagName}</Tag>
          })
        }
      </span>
      )
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (text, record) =>{
        return (
          <div>
            <Button type="primary" size="small" onClick={()=>{
                props.AddAndSetArticleFun(1)
                setData({...Data,title:record.title,status:record.status===1?true:false,
                    TagName:record.Tags.map((val)=>{return val.TagName}),Cover:record.Cover,content:record.content,
                    Category:record.Categories.map((val)=>{return val.CategoryName}),createdTime:record.createdTime,
                id:record.id})
            }}>编辑</Button>
              <Divider type="vertical" />
            <Button type="danger" size="small"
            onClick={()=>{
              props.DeleteArticle(record.id)
            }}>删除</Button>
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

export default ArticleTable
