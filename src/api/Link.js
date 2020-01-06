import http from '../http/index'

//添加新友情链接
export function NewLink (data) {
  return http({
    url:'/api/NewLink',
    method:'post',
    data
  })
}

//获取友情链接列表
export function GetLinkList () {
  return http({
    url:'/api/GetLinkList',
    method:'get'
  })
}

//删除友情链接
export function DeleteLink (id) {
  return http({
    url:'/api/DeleteLink',
    method:'post',
    data:{id}
  })
}

//修改友情链接
export function UpdateLink (data) {
  return http({
    url:'/api/UpdateLink',
    method:'post',
    data:{name:data.name,url:data.url,id:data.id,email:data.email}
  })
}
