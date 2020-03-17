import http from '../http/index'

export function login (data) {
  return http({
    url:'/api/login',
    method:'post',
    data
  })
}
