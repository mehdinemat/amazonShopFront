import { categoryConstants } from "./constants"
import axiosInstance from '../../helpers/axios'
export const categories = ()=>async(dispatch)=>{

  try{

    dispatch({type:categoryConstants.CATEGORY_REQURES})
    const res = await axiosInstance.get('/category')
    const {categoryList} = res.data
    dispatch({type:categoryConstants.CATEGORY_SUCCESS , payload:{categories:categoryList}})

  }catch(err){return dispatch({type:categoryConstants.CATEGORY_FAILURE , payload:{error:err.message}})}

 }