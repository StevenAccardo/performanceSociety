import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { renderComponent, renderAlert, validate } from '../../utils/signupSigninUtil';

class Signup extends Component {
  constructor(props) {
    super(props);
    const errorReset = '';
    props.authError(errorReset);
  }

  //Calls the action creator that sends the form values to the server
  handleFormSubmit(props) {
    this.props.signupUser(props);
  }

  render() {
    const { handleSubmit } = this.props;
    //Renders 3 Fields with custom input components. One e-mail, and one password, and one password confirmation
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <Field name="email" type="input" component={renderComponent} placeholder="E-mail" />
        </div>
        <div className="form-group">
          <label>Your password must be between 8 to 30 characters long.</label>
          <Field name="password" type="password" component={renderComponent} placeholder="Password" />
        </div>
        <div className="form-group">
          <Field name="passwordConfirm" type="password" component={renderComponent} placeholder="Confirm Password" />
        </div>
        {renderAlert(this.props)}
        <button action="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);

Signup = connect(mapStateToProps, actions)(Signup);

export default Signup;
