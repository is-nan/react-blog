import http from '../http/index'

//获取分类列表
export function GetCategoryList () {
  return http({
    url:'/api/GetCategoryList',
    method:'get'
  })
}

//查询某分类下的文章
export function FindCategoryList(name) {
  return http({
    url:'/api/FindCategory',
    method: 'post',
    data:{name}
  })
}
