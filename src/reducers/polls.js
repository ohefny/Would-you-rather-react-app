import { RECEIVE_POLLS, ADD_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return { ...state, ...action.polls };
    case ADD_POLL:{
        return {
            ...state,
            [action.poll.id]: action.poll, //should we add question to user_questions
          }
    }
    default:
      return state;
  }
}
