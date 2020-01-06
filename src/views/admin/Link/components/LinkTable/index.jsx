import React, { useContext } from 'react'
import { useSelector} from 'react-redux'
import { Button, Divider, Table } from 'antd'
import {LinkData} from '../../index'
function LinkTable (props) {
  //使用共享数据
  const {Data,setData}=useContext(LinkData)
  const store=useSelector(state=>state.Link)
  const columns = [
    {
      title: '博客名',
      dataIndex: 'name'
    },
    {
      title: '博客链接',
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
              props.handleCancel(1)
              setData(record)
            }}>编辑</Button>
            <Divider type="vertical" />
            <Button type="danger" size="small" onClick={()=>{
              props.DeteleLink(record.id)
            }}>删除</Button>
          </div>
        )
      }
    }
  ]
  return(
    <div>
      <Table rowKey="id" dataSource={store.LinkList} columns={columns} />
    </div>
  )
}

export default LinkTable
