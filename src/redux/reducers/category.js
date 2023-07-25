import { categoryConstants } from "../actions/constants"


const initialState = {
  categories: [],
  loading: false,
  error: false
}

export const category = (state = initialState, action) => {

  switch (action.type) {
    case categoryConstants.CATEGORY_REQURES:
      return {
        ...state, loading: true
      }
    case categoryConstants.CATEGORY_SUCCESS:
      return {
        ...state, categories: action.payload.categories, loading: false
      }
    case categoryConstants.CATEGORY_FAILURE:
      return {
        ...state, error: action.payload.error, loading: false
      }
  
    default:
      return {
        ...state
      }

  }

}