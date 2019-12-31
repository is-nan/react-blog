import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd';
import { GetArticle,UpdateArticleStatus } from "../../../../../api/Article";
import { Tag,Switch,message,Button,Divider } from 'antd'
import { ArticleData } from '../../index'
function ArticleTable(props) {
  //使用共享数据
  const {Data,setData}=useContext(ArticleData)
  //文章数据
  const [data,setdata]=useState([])
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
      title: '状态',
      dataIndex: 'status',
      key: 'index',
      render:(text, record,index)=>{
        return(
          <Switch defaultChecked checkedChildren="发布" unCheckedChildren="草稿" checked={record.status==1||record.status==true?true:false}
          onChange={async ()=>{
              await UpdateArticleStatus(record.id,record.status==1?2:1)
                  .then((res)=>{
                      if(res.data.code===0){
                          message.success(res.data.mess);
                      }else {
                          message.error(res.data.mess);
                      }
                  })
              await GetArticleList()
          }}/>
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
            }}>编辑{record.index}</Button>
              <Divider type="vertical" />
            <Button type="danger" size="small">删除{record.index}</Button>
          </div>
        )
      }
    }
  ]
    useEffect(()=>{
        GetArticleList()
    },[])
    const GetArticleList=()=>{
        GetArticle()
            .then((res)=>{
                setdata(res.data.data)
            })
    }
    return(
        <div>
            <Table rowKey="id" dataSource={data} columns={columns} />
        </div>
    )
}

export default ArticleTable
