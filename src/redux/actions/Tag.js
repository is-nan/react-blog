import { GETTAGLIST } from '../couter'
import { GetTagList } from '../../api/Tag'

//获取标签列表
export function ActionsGetTagList () {
  return (disptach)=>{
    GetTagList()
      .then((res)=>{
        disptach({
          type:GETTAGLIST,
          data:res.data.data
        })
      })
  }
}
