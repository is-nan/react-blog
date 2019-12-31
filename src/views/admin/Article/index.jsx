import React, { createContext, useState } from 'react'
import ArticleTable from "./conponents/ArticleTable";
import AddAndSetArticle from "./conponents/AddAndSetArticle";
import { Button, Modal ,message } from 'antd'
import { NewArticle,UpdateArticle } from '../../../api/Article'
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
    const [Data,setData]=useState({title:'',createdTime:null,Category:[],
    status:true,TagName:[],Cover:null,content:'',Author:'南岸有归'})
    //创建新文章or修改文章
    const AddAndSetArticleFun=(type=0)=>{
        //type===0为新文章type===1为修改文章
        if(type===0){
            console.log('新增')
            setData({...Data,title:'',createdTime:null,Category:[],
            status:true,TagName:[],Cover:null,content:'',Author:'南岸有归'})
        }
      setvisible(!visible)
    }
  //新增文章
  const handleCreate = () => {
        console.log(Data.id)
        //如果Data ID存在，为修改文章，不存在为创建文章
      // if(Data.id){
      //     NewArticle(Data)
      //         .then((res)=>{
      //             if(res.data.code===0){
      //                 message.success(res.data.mess);
      //                 AddAndSetArticleFun()
      //             }else {
      //                 message.error(res.data.mess);
      //             }
      //         })
      // }else{
          UpdateArticle(Data)
              .then((res)=>{
                  if(res.data.code===0){
                      message.success(res.data.mess);
                      AddAndSetArticleFun()
                  }else {
                      message.error(res.data.mess);
                  }
              })
      // }
  }
    return(
        <div>
            <Button type="primary" onClick={()=>{AddAndSetArticleFun(0)}}>
                新增
            </Button>
          {/*  共享数据*/}
          <ArticleData.Provider value={{Data, setData}}>
            <ArticleTable AddAndSetArticleFun={AddAndSetArticleFun}/>
            <AddAndSetArticle
              visible={visible}
              onCancel={AddAndSetArticleFun}
              onOk={AddAndSetArticleFun}
              handleCreate={handleCreate}
            />
          </ArticleData.Provider>
        </div>
    )
}

export default Article
