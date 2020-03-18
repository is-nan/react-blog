import http from '../http/index'

export function login(data) {
    return http({
        url: '/api/UserLogin',
        method: 'post',
        data
    })
}