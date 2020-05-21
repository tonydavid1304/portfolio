import * as constants from "../constants";

const initialState = {
    isLoading: true,
    data: {},
    err: ''
};

export default (state = initialState, action) => {
 switch (action.type) {
  case constants.FETCH_BEGIN:
   return {
    ...state
   }
  case constants.FETCH_SUCCESS:
   return {
    ...state, data: action.payload, isLoading: false
   }
  case constants.FETCH_FAILURE:
   return {
    ...state, err: action.payload
   }
  default:
   return state
 }
}