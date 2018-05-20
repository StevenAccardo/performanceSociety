import React from 'react';
import { Route, Link } from 'react-router-dom';

import TermsConditions from './termsConditions';
import PrivacyPolicy from './privacyPolicy';
import IG_logo_white from '../../../../assets/images/IG_logo_white.png';
import IG_logo_teal from '../../../../assets/images/IG_logo_teal.png';

const Footer = props => {
  return (
    <div>
      <Route exact path="/termsConditions" component={TermsConditions} />
      <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
      <footer className="footer text-center align-middle">
        <div className="container-fluid">
          <p className="footer__social">
            #PERFORM<span className="footer__social__span">TRAIN</span>LIVE
            <a className="footer__igLink ml-3" target="_blank" href="https://www.instagram.com/performancesociety/">
              <img className="footer__igLink__image--white" src={IG_logo_white} />
              <img className="footer__igLink__image--teal" src={IG_logo_teal} />
            </a>
          </p>
          <p>© 2015 PERFORMANCE SOCIETY. ALL RIGHTS RESERVED.</p>
          <span className="mr-1">
            <Link className="termsConditionsLink" to="/termsConditions">
              Terms & Conditions
            </Link>
          </span>
          <span className="ml-1">
            <Link className="privacyPolicyLink" to="privacyPolicy">
              Privacy Policy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
