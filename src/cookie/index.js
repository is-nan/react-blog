import Cookies from 'js-cookie'

export function GetToken() {
    return Cookies.get('www.nanbk.com_token')
}