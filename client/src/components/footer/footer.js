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
      <footer className="text-center align-middle">
        <div className="container-fluid">
          <p>
            #PERFORM<span>TRAIN</span>LIVE
            <a className="footer-ig-link ml-3" target="_blank" href="https://www.instagram.com/performancesociety/">
              <img src={IG_logo_white} />
              <img src={IG_logo_teal} />
            </a>
          </p>
          <p>© 2015 PERFORMANCE SOCIETY. ALL RIGHTS RESERVED.</p>
          <span className="mr-1">
            <Link to="/termsConditions">Terms & Conditions</Link>
          </span>
          <span className="ml-1">
            <Link to="privacyPolicy">Privacy Policy</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

// return (
//   <div>
//     <Route exact path="/termsConditions" component={TermsConditions} />
//     <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
//     <footer>
//       <p className="text-center">
//         #PERFORM<span>TRAIN</span>LIVE
//       </p>
//       <p className="text-center">© 2015 PERFORMANCE SOCIETY. ALL RIGHTS RESERVED.</p>
//       <p className="text-center">
//         <span>
//           <Link to="/termsConditions">Terms & Conditions</Link>
//         </span>
//         <span>
//           <Link to="privacyPolicy">Privacy Policy</Link>
//         </span>
//       </p>
//     </footer>
//   </div>
// );

export default Footer;
