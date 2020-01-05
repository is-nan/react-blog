import { GETTAGLIST } from '../couter'

//redux标签数据
const TagData={
  TagList:[]
}
//redux标签函数
function Tag (state=TagData,action) {
  switch (action.type) {
    case GETTAGLIST:
      return {
        ...state,
        TagList:action.data
      }
    default:return state
  }
}

export default Tag
