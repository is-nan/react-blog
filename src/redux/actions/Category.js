import { GETCATEGORYLIST } from '../couter'
import { GetCategoryList } from '../../api/Category'

//获取分类列表
export function ActionsGetCategoryList () {
  return (disptach)=>{
    GetCategoryList()
      .then((res)=>{
        disptach({
          type:GETCATEGORYLIST,
          data:res.data.data
        })
      })
  }
}
