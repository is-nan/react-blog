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
export function GetReleaseArticle() {
  return http({
    url:'/api/GetReleaseArticle',
    method: 'get'
  })
}