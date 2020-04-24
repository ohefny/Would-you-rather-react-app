import { getUsers } from "../api";

export const RECEIVE_USERS = "RECEIVE_USERS";

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleReceiveUsers() {
  return (dispatch) => {
    getUsers.then((users) => dispatch(receiveUsers(users)));
  };
}
