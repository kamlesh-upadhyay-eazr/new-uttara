import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILED,
  DELETE_ACTIVITY_BY_ID_FAILED,
  GET_EVENTS_BY_ID,
  GET_EVENTS_BY_ID_FAILED,
  GET_SEARCH_EVENTS,
  GET_SEARCH_EVENTS_FAILED,
  EVENT_LOADING,
  INCREMENT,
  DECREMENT,
  ADULT_INCREMENT,
  ADULT_DECREMENT,
  GET_ALL_EVENTS_COUNT_FAILED,
  GET_ALL_EVENTS_COUNT,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILED,
  ADD_COUNTER,
  EVENT_INCREMENT,
  EVENT_DECREMENT,
  TICKET_INCREMENT,
  TICKET_DECREMENT,
  ADD_NEW_EVENT_FAILED,
  ADD_NEW_EVENT,
} from "./actionTypes";

const initialState = {
  // count:0,
  childCount: 0,
  adultCount: 0,
  events: [],
  singleEvent: [],
  newEvent: [],
  loading: false,
  errors: null,
  search: [],
  ticketCount: 0,
  // counters:[]
};
const event = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LOADING:
      return {
        ...state,
        loading: true,
        // events: [],
        errors: null,
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        errors: null,
        loading: false,
      };

    case GET_EVENTS_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        events: [],
      };

    case DELETE_ACTIVITY_BY_ID_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case INCREMENT:
      return {
        ...state,
        childCount: action.payload,
        errors: null,
      };

    case DECREMENT:
      return {
        ...state,
        childCount: action.payload,
        errors: null,
      };

    case ADULT_INCREMENT:
      return {
        ...state,
        adultCount: action.payload,
        errors: null,
      };

    case ADULT_DECREMENT:
      return {
        ...state,
        adultCount: action.payload,
        errors: null,
      };

    case GET_EVENTS_BY_ID:
      return {
        ...state,
        singleEvent: action.payload,
        errors: null,
        loading: false,
      };

    case GET_EVENTS_BY_ID_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        singleEvent: [],
      };

    case ADD_NEW_EVENT:
      return {
        ...state,
        loading: false,
        newEvent: action.payload,
      };

    case ADD_NEW_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_SEARCH_EVENTS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };

    case GET_SEARCH_EVENTS_FAILED:
      return {
        ...state,
        errors: action.payload,
        search: [],
      };

    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        allEvents: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_EVENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        allEvents: [],
        loading: false,
      };

    case TICKET_INCREMENT:
      if (event.itemId === action.itemId) {
        return state;
      }
      return {
        ...state,
        adultCount: action.payload,
      };
    // return {
    //   ...state,
    //   ticketCount: state.ticketCount + 1,
    // };
    case TICKET_DECREMENT:
      if (event.itemId === action.itemId) {
        return state;
      } else
        return {
          ...state,
          adultCount: action.payload,
        };
      // return {
      //   ...state,
      //   ticketCount: state.ticketCount - 1,
      // };

      let nextId = 0;
    case ADD_COUNTER:
      return [...state, { itemId: nextId++ }];
    case EVENT_INCREMENT:
      return state.map((events) => event(events, action));
    case EVENT_DECREMENT:
      return state.map((events) => event(events, action));

    // case GET_ALL_EVENTS_COUNT:
    //   return {
    //     ...state,
    //     loading: false,
    //     count: action.payload,
    //   };

    // case GET_ALL_EVENTS_COUNT_FAILED:
    //   return {
    //     ...state,
    //     errors: action.payload,
    //   };

    default:
      return { ...state };
  }
};

export default event;
