//Reducer that handles incoming authentication related actions

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    //User is authenticated, updates authenticated flag
    case AUTH_USER:
      //If there was an auth error, this will replace that error with an empty string, if the user is authenticated, so that the error message is not hanging around, after the user is authenticated
      //ES2018 spread operator applied to objects, using babel stage-3 plugin to transpile
      return { ...state, error: '', authenticated: true };
    //User is NOT authenticated, updates authenticated flag
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    //Updates the application state with any error messages that come back from the server
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    //Updates the application state with the message sent back from the server on the protected route
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }

  return state;
}
