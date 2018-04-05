import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { renderComponent, renderAlert, validate } from '../../utils/signupSigninUtil';

class Signin extends Component {
  constructor(props) {
    super(props);
    const errorReset = '';
    props.authError(errorReset);
  }

  handleFormSubmit({ email, password }) {
    //calls the action creator, and passes in the user entered data
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <Field className="form-control" name="email" component={renderComponent} type="input" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <Field className="form-control" name="password" component={renderComponent} type="password" placeholder="Password" />
        </div>
        {renderAlert(this.props)}
        <button action="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  //pulls the errormessage off of the state object, and makes it available in props
  return { errorMessage: state.auth.error };
}
//assigning reduxForm decorator to our class
Signin = reduxForm({
  form: 'signin',
  validate
})(Signin);

//assigning connect, so that we can have access to the action creator via props
Signin = connect(mapStateToProps, actions)(Signin);

export default Signin;
