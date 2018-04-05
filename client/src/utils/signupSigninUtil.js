import React from 'react';

export function renderComponent({ meta: { error, touched }, input, placeholder, type }) {
  return (
    <div>
      <input {...input} type={type} placeholder={placeholder} className="form-control" />
      <div className="text-danger">{touched && error}</div>
    </div>
  );
}

//renders the error messages from the server when a user enters the wrong signin/signup information
export function renderAlert({ errorMessage }) {
  if (errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
}

export function validate(values, props) {
  //PASSWORD IS ONLY VALIDATED BY LENGTH. IF YOU WANT STRICTER VALIDATION, USE THE APPROPTIATE REGEX BELOW
  const errors = {};
  const emailRE = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  //Uses email regex to test user value is properly formatted
  if (!emailRE.test(values.email)) {
    errors.email = 'Please enter a valid e-mail. Ex. myEmail@EmailProvider.com';
  }

  if (!values.email) {
    errors.email = 'Please enter an e-mail.';
  }
  if (values.password && values.password.length > 30) {
    errors.password = 'Your password must not be longer than 30 characters.';
  }

  if (values.password && values.password.length < 8) {
    errors.password = 'Your password must be atleast 8 characters long.';
  }

  if (!values.password) {
    errors.password = 'Please enter a password.';
  }
  //Looks  in props to check whether the validate function is being invoked from the signup form, since the signin form doesn't have a passwordConfirm input. Everything would have function properly if we didn't check this, but there would be a passwordConfirm property on the signin form's error object, which isn't correct.
  if (props.form === 'signup' && !values.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm your password.';
  }

  if (props.form === 'signup' && (values.passwordConfirm && values.password !== values.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match.';
  }

  return errors;
}
