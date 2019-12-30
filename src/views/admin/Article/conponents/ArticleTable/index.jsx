import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'antd';
import { GetReleaseArticle } from "../../../../../api/Article";
import { Tag,Switch } from 'antd'
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
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   key: 'index',
    //   render:(text, record,index)=>{
    //     return(
    //       <Switch defaultChecked checkedChildren="发布" unCheckedChildren="草稿" checked={record.status}/>
    //     )
    //   }
    // },
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
            <a onClick={()=>{
                props.AddAndSetArticleFun()
                setData({...Data,title:record.title
                })
            }}>编辑{record.index}</a>
            <a>删除{record.index}</a>
          </div>

        )
      }
    }
  ]
    useEffect(()=>{
        GetArticle()
    },[])
    const GetArticle=()=>{
        GetReleaseArticle()
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
