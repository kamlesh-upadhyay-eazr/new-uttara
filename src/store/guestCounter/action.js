import { GET_TOTAL_GUEST, GET_TOTAL_PRICE, INCREMENT_CHILD } from "./actionTypes";

export const getTotalGuest = (total) => {
  return {
    type: GET_TOTAL_GUEST,
    payload: total,
  };
};

export const getTotalPrice = (amount) => {
  return {
    type: GET_TOTAL_PRICE,
    payload: amount,
  };
};

export const increment = (tickets) => {
  return {
    type: INCREMENT_CHILD,
    payload: tickets + 1,
  };
};
