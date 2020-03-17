import http from '../http/index'

//新增留言or评论
export function NewComment(data) {
    return http({
        url:'/api/NewComment',
        method:'post',
        data
    })
}

//获取某文章评论
export function GetArticleComment(ArticleId) {
    return http({
        url:'/api/GetArticleComment',
        method:'post',
        data:{ArticleId}
    })
}


//获取博客留言
export function GetComment() {
    return http({
        url:'/api/GetComment',
        method:'get'
    })
}

//删除留言or评论
export function DeleteComment(id) {
    return http({
        url:'/api/DeleteComment',
        method:'post',
        data:{id}
    })
}

//获取所有文章评论
export function GetAllArticleComment() {
    return http({
        url:'/api/GetAllArticleComment',
        method:'get'
    })
}