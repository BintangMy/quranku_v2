import { FETCH_ALL_DOA, FETCH_DETAIL_DOA } from "../actionType/doaActionType";

const initialState = {
  doa: [],
  oneDoa: {}
};

const doaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DOA:
      return {
        ...state,
        doa: action.payload,
      };
    case FETCH_DETAIL_DOA:
      return {
        ...state,
        oneDoa: action.payload
      }
    default:
      return state;
  }
};

export default doaReducer