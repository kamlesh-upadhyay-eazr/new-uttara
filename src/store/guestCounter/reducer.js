import { GET_TOTAL_GUEST, GET_TOTAL_PRICE, INCREMENT_CHILD } from "./actionTypes";

const initialState = {
  totalGuest: 0,
  child:0,
  amount:0
};

const GuestInputs = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_GUEST:
      return {
        ...state,
        totalGuest: action.payload,
      };
    case GET_TOTAL_PRICE:
      return {
        ...state,
        amount: action.payload,
      };
    case INCREMENT_CHILD:
      return {
        ...state,
        child: action.payload,
      };

    default:
      return state;
  }
};

export default GuestInputs;
