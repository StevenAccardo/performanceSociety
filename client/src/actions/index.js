//submits login info to API server to be authenticated and stored in DB.
//Uses redux-thunk so that we have access to the dispatch method, so we can dispatch actions whenever.

//Axios is used for our http requests
import axios from 'axios';

//History is a utility that we have to use with react-router v4 in order to access the history stack outside of components.
import history from '../utils/history';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

//Assigns the root url differently depending on what environment the application is being run in.
let ROOT_URL;
process.env.NODE_ENV === 'production' ? (ROOT_URL = 'https://powerful-sands-56330.herokuapp.com') : (ROOT_URL = 'http://localhost:3000');

//"Action creator" for user signin, accepts an object with the user entered email and password
export function signinUser({ email, password }) {
  //dispatch accepts an action and forwards it to all of the different reducers that we have in our application
  //redux-thunk allows us to return functions instead of objects and it allows one action creator to send multiple actions at a time.
  //action creators are synchronous by default, redux-thunk is asynchronous
  //When the action creator is called, it will immediately return a function, which redux thunk is going to call while passing in the dispatch method.
  return function(dispatch) {
    //submit email/password to our API server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //if request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        //localStorage is available on the window scope
        //it allows us to store info on the users computer
        //even if the user leaves the app, they will still have the JWT saved
        //setItem saves something to localStorage
        localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'
        history.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        //if request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        //localStorage is available on the window scope
        //it allows us to store info on the users computer
        //even if the user leaves the app, they will still have the JWT saved
        //setItem saves something to localStorage
        localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'
        history.push('/feature');
      })
      .catch(error => {
        // If request is bad...
        // - Show an error to the user
        //In this case we are filling the error message with data from the server instead of a string
        dispatch(authError(error.response.data.error));
      });
  };
}

//Packages up any of the error messages that come back from the HTTP Requests, creates an action, and returns that action to the AUTH_ERROR reducer which then allows those messages to be displayed to the user via the UI
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

//This action creator is called when the user clicks signout
export function signoutUser() {
  //removes the JWT from the user's localStorage
  localStorage.removeItem('token');
  //sends action to reducers to update application state
  return { type: UNAUTH_USER };
}

//action creator that sends a GET request to the root route of our server and returns a message. This is a practice case to emulates fetching some protected data only when the user is authenticated.
//Commented out for future use
// export function fetchMessage() {
//   return function(dispatch) {
//     //Includes optional paramateres in the HTTP request, in thise case, the JWT that is stored locally is being attached to the request header
//     axios.get(`${ROOT_URL}/feature`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
//       //sends the response message to the reducers
//       dispatch({
//         type: FETCH_MESSAGE,
//         payload: response.data.message
//       });
//     });
//   };
// }
