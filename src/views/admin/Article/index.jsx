import React, { createContext, useState } from 'react'
import ArticleTable from "./conponents/ArticleTable";
import AddAndSetArticle from "./conponents/AddAndSetArticle";
import { Button, Modal } from 'antd'
import { NewArticle } from '../../../api/Article'
//定义共享数据
export const ArticleData=new createContext();
function Article(props) {
    //弹出框显示控制变量
    const [visible,setvisible]=useState(false)
    //显示弹出框
    const ShowModal=()=>{
        setvisible(!visible)
    }
    //富文本内容
    const [Data,setData]=useState({title:'',createdTime:'',Category:[],
    status:true,TagName:[],Cover:null,content:''})
    //创建新文章
    const AddAndSetArticleFun=()=>{
      setvisible(!visible)
    }
  //新增文章
  const handleCreate = () => {
    NewArticle(Data)
      .then((res)=>{
        console.log(res.data)
      })
  }
    return(
        <div>
            <Button type="primary" onClick={ShowModal}>
                新增
            </Button>
          {/*  共享数据*/}
          <ArticleData.Provider value={{Data, setData}}>
            <ArticleTable AddAndSetArticleFun={AddAndSetArticleFun}/>
            <AddAndSetArticle
              visible={visible}
              onCancel={ShowModal}
              onOk={AddAndSetArticleFun}
              handleCreate={handleCreate}
            />
          </ArticleData.Provider>
        </div>
    )
}

export default Article
