import React, { createContext, useState,useEffect } from 'react'
import ArticleTable from "./conponents/ArticleTable";
import AddAndSetArticle from "./conponents/AddAndSetArticle";
import { Button, Modal ,message } from 'antd'
import { NewArticle,UpdateArticle,GetArticle,UpdateArticleStatus,DeleteArticle } from '../../../api/Article'
import { useDispatch } from 'react-redux'
import { ActionsGetCategoryList } from "../../../redux/actions/Category";
import { ActionsGetTagList } from "../../../redux/actions/Tag";
//定义共享数据
export const ArticleData=new createContext();
function Article(props) {
    //redux派发
    const Dispatch=useDispatch()
    //弹出框显示控制变量
    const [visible, setvisible] = useState(false)
    //显示弹出框
    const ShowModal = () => {
        setvisible(!visible)
    }
    //Context数据
    const [Data, setData] = useState({
        title: '', createdTime: new Date(), Category: [],
        status: true, TagName: [], Cover: null, content: '', Author: '南岸有归'
    })
    //文章表格数据
    const [TableData,setTableData]=useState()
    //获取文章列表
    const GetArticleList=()=>{
        GetArticle()
            .then((res)=>{
                setTableData(res.data.data)
            })
    }
    useEffect(()=>{
        GetArticleList()
        Dispatch(ActionsGetCategoryList())
        Dispatch(ActionsGetTagList())
    },[])
    //修改文章状态
    const UpTableArticleStatus=async (record)=>{
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
    //删除文章
    const DeArticle=(id)=>{
        DeleteArticle(id)
            .then((res)=>{
                if(res.data.code===0){
                    message.success(res.data.mess);
                }else {
                    message.error(res.data.mess);
                }
            })
    }
    //创建新文章or修改文章
    const AddAndSetArticleFun = (type = 0) => {
        //type===0为新文章type===1为修改文章
        if (type === 0) {
            setData({
                title: '', createdTime: new Date(), Category: [],
                status: true, TagName: [], Cover: null, content: '', Author: '南岸有归'
            })
        }
        setvisible(!visible)
    }
    //新增and修改文章
    const handleCreate =async () => {
        console.log(Data.id)
        //如果Data ID存在，为修改文章，不存在为创建文章
        if (!Data.id) {
           await NewArticle(Data)
                .then((res) => {
                    if (res.data.code === 0) {
                        message.success(res.data.mess);
                        AddAndSetArticleFun()
                    } else {
                        message.error(res.data.mess);
                    }
                })
        } else {
          await  UpdateArticle(Data)
                .then((res) => {
                    if (res.data.code === 0) {
                        message.success(res.data.mess);
                        AddAndSetArticleFun()
                    } else {
                        message.error(res.data.mess);
                    }
                })
        }
        await GetArticleList()
    }
    //修改文章发布状态
        return (
            <div>
                <Button type="primary" onClick={() => {
                    AddAndSetArticleFun(0)
                }}>
                    新增
                </Button>
                {/*  共享数据*/}
                <ArticleData.Provider value={{Data, setData}}>
                    {/*文章表格组件*/}
                    <ArticleTable AddAndSetArticleFun={AddAndSetArticleFun} data={TableData}
                    TableArticleonChange={UpTableArticleStatus} DAeleterticle={DeArticle}/>
                    {/*新增and修改弹窗组件*/}
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
