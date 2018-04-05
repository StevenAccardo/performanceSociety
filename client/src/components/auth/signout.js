//Signs user out and displays a message

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    //Calls the action creator that will sign the user out and remove their JWT from localStorage
    this.props.signoutUser();
  }

  render() {
    //Renders a goodbye message to user
    return <div>Sorry to see you go...</div>;
  }
}

export default connect(null, actions)(Signout);
