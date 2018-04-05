//Protected component which the user can only access if authenticated

import React from 'react';

function Feature(props) {
  //Renders the protected message
  return <div>You have been Auth'd!</div>;
}
export default Feature;
