import { FETCH_ALL_ASMAUL_HUSNA} from "../actionType/asmaulHusnaType";

const initialState = {
  asmaul_husna: []
};

const doaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ASMAUL_HUSNA:
      return {
        ...state,
        asmaul_husna: action.payload,
      };
    default:
      return state;
  }
};

export default doaReducer