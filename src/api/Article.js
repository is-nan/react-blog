import http from '../http/index'

//创建新文章
export function NewArticle (Article) {
  return http({
    url:'/api/NewArticle',
    method:'post',
    data:{...Article,status:Article.status?1:2}
  })
}
