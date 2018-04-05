import React from 'react';
import { Route, Link } from 'react-router-dom';

import TermsConditions from './termsConditions';
import PrivacyPolicy from './privacyPolicy';

const Footer = props => {
  return (
    <div>
      <Route exact path="/termsConditions" component={TermsConditions} />
      <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
      <footer>
        <p className="text-center">
          #PERFORM<span>TRAIN</span>LIVE
        </p>
        <p className="text-center">© 2015 PERFORMANCE SOCIETY. ALL RIGHTS RESERVED.</p>
        <p className="text-center">
          <span>
            <Link to="/termsConditions">Terms & Conditions</Link>
          </span>
          <span>
            <Link to="privacyPolicy">Privacy Policy</Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
