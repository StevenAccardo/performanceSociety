import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import history from './utils/history';
//Redux middleware that allows us to use functions and call the dispatch() method to send actions to the reducers when we need to instead of using the standard action creator.
import reduxThunk from 'redux-thunk';

//imports css file so webpack can access it
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';

import App from './components/app';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//Declare the store before checking for the token, so that way if there is a token stored in localStorafe you can change the authentication flag in the store if the user had signed in before, then you pass the store after the check and update have been made. That way if the user accidently exits outt of the window and returns, or refreshes, the application will render in an authorized state.
const store = createStoreWithMiddleware(reducers);

//Checks for JWT in local storage
const token = localStorage.getItem('token');
//If there is a token, condsider the user to be signed in
if (token) {
  // Update application state
  //use the dispatch method to send out an action, that will run through all of the reducers, in this case AUTH_USER will flip the authenticated state to true.
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  //Variable store is passed in AFTER checking for the JWT to determine whether the user is logged in or not.
  <Provider store={store}>
    {/* Custom Router, that allows us to progamatically change routes outside of components */}
    <Router history={history}>
      <Container fluid>
        <App />
      </Container>
    </Router>
  </Provider>,
  document.querySelector('#app')
);
