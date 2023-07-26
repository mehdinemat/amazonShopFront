import axiosInstance from "../../helpers/axios"
import { getProductSlugConstants } from "./constants"

export const getProductSlug = ({param}) => async (dispatch) => {

  try {
    console.log('this is thsi')
    dispatch({ type: getProductSlugConstants.PRODUCT_REQUEST_SLUG })
    const res = await axiosInstance.get(`/products/${param}`)

    console.log(res.data , 'this is data')


  } catch (err) { dispatch({ type: getProductSlugConstants.PRODUCT_FAILURE_SLUG, payload: { error: err.message } }) }

}