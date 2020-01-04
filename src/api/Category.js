import http from '../http/index'

//获取分类列表
export function GetCategoryList () {
  return http({
    url:'/api/GetCategoryList',
    method:'get'
  })
}
