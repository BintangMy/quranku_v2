import { FETCH_ALL_CITY, FETCH_SCHEDULE, FETCH_HIJRIAH_DATE} from "../actionType/jadwalSholatType";

const initialState = {
  allCity: [],
  oneCity: {},
  hijriahDate: {}
};

const jadwalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HIJRIAH_DATE:
      return {
        ...state,
        hijriahDate: action.payload,
      };
    case FETCH_ALL_CITY:
      return {
        ...state,
        allCity: action.payload,
      };
    case FETCH_SCHEDULE:
      return {
        ...state,
        oneCity: action.payload,
      };
    default:
      return state;
  }
};

export default jadwalReducer;
