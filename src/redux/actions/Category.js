import { GETCATEGORYLIST } from '../couter'
import { GetCategoryList } from '../../api/Category'

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
