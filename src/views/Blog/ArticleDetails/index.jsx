/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 15:42:34
 * @LastEditTime: 2020-03-24 16:33:25
 * @LastEditors: 南岸有归
 * @Description: 文章详情页
 * @FilePath: \cloud_frontendd:\react\react-blog\src\views\Blog\ArticleDetails\index.jsx
 * @
 */
import React,{useState,useEffect} from 'react'
import { GetArticleDetailsAndComment } from '../../../api/ArticleDetails'
import { useParams,useHistory } from 'react-router-dom'
import { Icon } from 'antd';
import Comment from '../../../components/Comment'
import './index.scss'
import marked from 'marked';
import 'highlight.js/styles/tomorrow-night.css';
import hljs from 'highlight.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale()
//阿里icon自定义图标
const IconFont = Icon.createFromIconfontCN({
 scriptUrl: '//at.alicdn.com/t/font_1710871_fzogmiqut6k.js',
})
 function ArticleDetails(props){
  //编程式路由跳转
   const history=useHistory()
  //  路由参数ID获取
  const { id } = useParams()
    //  文章详情数据
   const [ArticleData,setArticleData]=useState({Categories:[],Tags:[]})
   //文章评论数据
   const [CommentData,setCommentData]=useState([])
   const GetArticleDetails=()=>{
   GetArticleDetailsAndComment(id)
    .then((res)=>{
      //文章数据与评论数据赋值
      setArticleData(res.data.data.Article[0])
      setCommentData(res.data.data.Comment)
    })
   }
   useEffect(()=>{
       marked.setOptions({
           renderer: new marked.Renderer(),
           gfm: true,
           tables: true,
           breaks: true,
           pedantic: false,
           sanitize: true,
           smartLists: true,
           smartypants: false,
           highlight: function(code) {
               return hljs.highlightAuto(code).value;
           },
       });
    GetArticleDetails()
   },[])
  return (
    <div className="ArticleDetails">
     <p className="ArticleDetails_Title">{ArticleData.title}</p>
        <div className="content">
            <div
                id="content"
                className="article-detail"
                dangerouslySetInnerHTML={{
                    __html: ArticleData.content ? marked(ArticleData.content) : null,
                }}
            />
        </div>
      {/* 评论组件 */}
     <span><IconFont type="icon-taiyang" className="ArticleDetails_Icon" /></span>
     <span className="ArticleDetails_Tag">{moment(ArticleData.createdTime).add(10, 'days').calendar()}</span>
     {

     }
     {/* 分类 */}
     <span><IconFont type="icon-duihaoqipao2" className="ArticleDetails_Icon" /></span>
     {
      ArticleData.Categories.map((Items, index) => {
       return <span className="ArticleDetails_Tag" key={index} onClick={() => {history.push(`/Categories/${Items.CategoryName}`);}}>{Items.CategoryName}</span>
      })
     }

     {/* 标签 */}
     <span><IconFont type="icon-biaoqian" className="ArticleDetails_Icon" /></span>
     {
      ArticleData.Tags.map((Items, index) => {
       return <span className="ArticleDetails_Tag" key={index} onClick={() => {history.push(`/Tags/${Items.TagName}`);}}>{Items.TagName}</span>
      })
     }
      <div className="ArticleDetails_FooterBd"></div>
      <Comment data={CommentData} ArticleId={ArticleData.id} GetData={GetArticleDetails}/>
    </div>
  )
 }

 export default ArticleDetails
