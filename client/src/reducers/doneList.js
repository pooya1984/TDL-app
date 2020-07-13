import {
  GET_DONELISTS,
  DONElIST_ERROR,
  DELETE_DONELIST,
  ADD_DONELIST,
  GET_DONELIST,
} from "../actions/types";

const initialState = {
  doneLists: [],
  doneList: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DONELISTS:
      return {
        ...state,
        doneLists: payload,
        loading: false,
      };
    case GET_DONELIST:
      return {
        ...state,
        doneList: payload,
        loading: false,
      };
    case ADD_DONELIST:
      return {
        ...state,
        doneLists: [payload, ...state.doneLists],
        loading: false,
      };
    case DELETE_DONELIST:
      return {
        ...state,
        doneLists: state.doneLists.filter(
          (doneList) => doneList._id !== payload
        ),
        loading: false,
      };
    case DONElIST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
