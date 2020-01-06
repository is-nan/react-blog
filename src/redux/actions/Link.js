import { GETLINKLIST } from '../couter'
import { GetLinkList } from '../../api/Link'

//获取友情链接列表
export function ActionsGetLinkList () {
  return (disptach)=>{
    GetLinkList()
      .then((res)=>{
        disptach({
          type:GETLINKLIST,
          data:res.data.data
        })
      })
  }
}
