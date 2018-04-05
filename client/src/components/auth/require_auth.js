//A higher order component
//Redirects user back to a specified route if they are not authenticated

import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';

//A function that accepts a component
//The function will add additional functionality to the basic component
export default function(ComposedComponent) {
  class Authentication extends Component {
    //called whenever the component is about to be rendered, and redirect if the user is not authenticated.
    componentWillMount() {
      if (!this.props.authenticated) {
        history.push('/signin');
      }
    }

    //called whenever the component is going to receive new props, which may contain an updated authenticated flag. If not, redirect them.
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        history.push('/signin');
      }
    }
    //If the user is authencticated, then render the ComposedComponent
    render() {
      //renders the passed in component, as well as passing through any props on that Component using the spread operator
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  //uses connect to gain access to the redux store, so we can tell if the user is logged in or logged out by gaining access to the authenticated property in the store
  return connect(mapStateToProps)(Authentication);
}
