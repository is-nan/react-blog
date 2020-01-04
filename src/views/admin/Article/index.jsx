import React, { createContext, useState,useEffect} from 'react'
import ArticleTable from "./conponents/ArticleTable";
import AddAndSetArticle from "./conponents/AddAndSetArticle";
import { Button, Modal ,message } from 'antd'
import { NewArticle,UpdateArticle,GetArticle,UpdateArticleStatus} from '../../../api/Article'
import { GetCategoryList } from '../../../api/Category'
import { ActionsGetTagList } from '../../../redux/actions/Tag'
// import { useDispatch } from 'react-redux'
//定义共享数据
export const ArticleData=new createContext();
function Article(props) {
    //实例化redux
    // const Dispatch=useDispatch()
    //弹出框显示控制变量
    const [visible,setvisible]=useState(false)
    //文章列表数据
    const [List,setList]=useState()
    //分类列表数据
    const [ CategoryList,setCategoryList ]=useState()
    //获取文章列表
    const GetArticleList=()=> {
      GetArticle()
        .then((res) => {
          setList(res.data.data)
        })
      // Dispatch(ActionsGetTagList())
    }
    //获取分类列表
    const GetCategory=()=>{
      GetCategoryList()
        .then((res)=>{
          console.log(res.data.data)
          setCategoryList((res.data.data.map((val)=>{return val.CategoryName })))
        })
    }
    //富文本内容
    const [Data,setData]=useState({title:'',createdTime:null,Category:[],
    status:true,TagName:[],Cover:null,content:'',Author:'南岸有归'})
    //创建新文章or修改文章
    const AddAndSetArticleFun=(type=0)=>{
        //type===0为新文章type===1为修改文章
        if(type===0){
            setData({title:'',createdTime:null,Category:[],
            status:true,TagName:[],Cover:null,content:'',Author:'南岸有归'})
        }
      setvisible(!visible)
    }
  //新增文章
  const handleCreate = () => {
        //Data.id存在为修改文章，不存在为新增文章
      if(Data.id===undefined){
          NewArticle(Data)
              .then((res)=>{
                  if(res.data.code===0){
                      message.success(res.data.mess);
                      AddAndSetArticleFun()
                  }else {
                      message.error(res.data.mess);
                  }
              })
      }else if(Data.id!==undefined){
          UpdateArticle(Data)
              .then((res)=>{
                  if(res.data.code===0){
                      message.success(res.data.mess);
                      AddAndSetArticleFun()
                  }else {
                      message.error(res.data.mess);
                  }
              })
      }
      //修改或新增文章后获取最新的文章列表
    GetArticleList()
  }
  //修改文章状态
  const UpArticleStatus=async (record)=>{
    await UpdateArticleStatus(record.id,record.status==1?2:1)
      .then((res)=>{
        if(res.data.code===0){
          message.success(res.data.mess);
        }else {
          message.error(res.data.mess);
        }
      })
    await GetArticleList()
  }
  //获取文章列表
  useEffect(()=>{
    GetArticleList()
    GetCategory()
  },[])
    return(
        <div>
            <Button type="primary" onClick={()=>{AddAndSetArticleFun(0)}}>
                新增
            </Button>
          {/*  共享数据*/}
          <ArticleData.Provider value={{Data, setData}}>
            <ArticleTable AddAndSetArticleFun={AddAndSetArticleFun} GetArticleList={GetArticleList} data={List} UpArticleStatus={UpArticleStatus}/>
            <AddAndSetArticle
              visible={visible}
              onCancel={AddAndSetArticleFun}
              onOk={AddAndSetArticleFun}
              handleCreate={handleCreate}
              GetArticleList={GetArticleList}
            />
          </ArticleData.Provider>
        </div>
    )
}

export default Article
