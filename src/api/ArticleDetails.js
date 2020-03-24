/*
 * @Author: 南岸有归
 * @Date: 2020-03-24 15:46:22
 * @LastEditTime: 2020-03-24 16:00:21
 * @LastEditors: 南岸有归
 * @Description: 文章详情接口
 * @FilePath: \cloud_frontendd:\react\react-blog\src\api\ArticleDetails.js
 * @
 */
import http from '../http/index'
//获取文章详情与文章评论
export function GetArticleDetailsAndComment(id){
  return http({
    url:'/api/GetArticleDetails',
    method:'post',
    data:{id}
  })
 }
