import { getProductSlugConstants } from "../actions/constants"

const initialState = {
  loading: false,
  error: false,
  productByPrice: [],
  product: []
}

export const product = (state = initialState, action) => {

  switch (action.type) {
    case getProductSlugConstants.PRODUCT_REQUEST_SLUG:
      return {
        ...state, loading: true
      }
      case getProductSlugConstants.PRODUCT_SUCCESS_SLUG:
        return { 
          ...state , productByPrice:action.payload.productByPrice , product:action.payload.product , loading:false
        }
    case getProductSlugConstants.PRODUCT_FAILURE_SLUG:
      return {
        ...state, error: action.payload.error , loading:false
      }
      default:
        return { 
          ...state
        }

  }



}