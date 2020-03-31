import { GETCATEGORYLIST } from '../couter'

//分类数据
const CategoryData={
  CategoryList:[]
}
//分类函数
function Category (state=CategoryData,action) {
  switch (action.type) {
    case GETCATEGORYLIST:
      return {
        ...state,
        CategoryList: action.data.map(val=>val.CategoryName)
      }
    default:return state
  }
}

export default Category
