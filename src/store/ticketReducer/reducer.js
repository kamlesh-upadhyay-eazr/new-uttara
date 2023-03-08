import {
  INCREMENT,
  DECREMENT,
  TICKET_DETAILS,
  ADD_PATICIPANTS,
  CHANGE_ATTENDEE_DETAILS_SUCCESS,
  CHANGE_ATTENDEE_DETAILS_FAILED,
  LOADING,
  INCREMENT_DETAILS,
  DECREMENT_DETAILS,
  TICKET_INCREMENT_DETAILS,
} from "./actionTypes";

const INITIAL_STATE = {
  tickets: 0,
  eventInfo: [],
  participants: [],
  eventDetails: [],
  eventName: null,
  loading: false,
  events: null,
  error: "",
  ticketDetails: [],
  userEmail: [null],
  userEmailerror: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        tickets: action.payload,
      };

    case DECREMENT:
      return {
        tickets: action.payload,
      };

    case TICKET_DETAILS:
      return {
        eventDetails: action.payload,
      };

    // case CHANGE_EVENT_INFO:
    //   return {
    //     ...state,
    //     eventInfo: [...(state.eventInfo || []), action.payload],
    //   };
    // case CHANGE_LEAD_NAME:
    //   console.log(state.leadName);
    //   return {
    //     ...state,
    //     leadName: action.payload,
    //   }


    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
