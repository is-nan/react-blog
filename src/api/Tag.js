import http from '../http/index'

//获取标签列表
export function GetTagList() {
  return http({
    url:'/api/GetTagList',
    method:'get'
  })
}

//查询某标签下的文章
export function FindTags(name) {
  return http({
    url:'/api/FindTag',
    method:'post',
    data:{name}
  })
}