import { GETLINKLIST } from '../couter'
const LinkData={
  LinkList:[]
}

//友情链接函数
function Link (state=LinkData,action) {
  switch (action.type) {
    case GETLINKLIST:
      return {
        ...state,
        LinkList:action.data
      }
    default:return state
  }
}

export default Link
