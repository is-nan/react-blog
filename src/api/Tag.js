import http from '../http/index'

export function GetTagList() {
  return http({
    url:'/api/GetTagList',
    method:'get'
  })
}
