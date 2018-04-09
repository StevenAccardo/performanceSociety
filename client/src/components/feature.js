//Protected component which the user can only access if authenticated

import React from 'react';

function Feature(props) {
  //Renders the protected message
  return <div className="text-white">You have been Auth'd!</div>;
}
export default Feature;
