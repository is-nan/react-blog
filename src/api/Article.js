import http from '../http/index'

//创建新文章
export function NewArticle (Article) {
  console.log(Article)
  return http({
    url:'/api/NewArticle',
    method:'post',
    data:{...Article,status:Article.status?1:2}
  })
}

//获取所有的文章列表
export function GetArticle() {
  return http({
    url:'/api/GetArticle',
    method: 'get'
  })
}

//表格内修改文章状态
export function UpdateArticleStatus(id,status) {
  return http({
    url:'/api/UpdateArticleStatus',
    method:'post',
    data:{id,status}
  })
}

//修改文章
export function UpdateArticle(Article) {
  return http({
    url:'/api/UpdateArticle',
    method:'post',
    data:{...Article,status:Article.status?1:2}
  })
}

//删除文章
export function DeleteArticle (id) {
  return http({
    url:'/api/DeleteArticle',
    method:'post',
    data:{id}
  })
}
