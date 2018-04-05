import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Signup from './auth/signup';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Feature from './feature';
import Landing from './landing/landing';
import Workouts from './workouts/workouts';
import Articles from './article/articles';
import Videos from './video/videos';
import RequireAuth from './auth/require_auth';
import Footer from './footer/footer';

export default class App extends Component {
  render() {
    return (
      //Always renders Header, renders other routes depending on url
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/workouts" component={Workouts} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/videos" component={Videos} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />

        {/* You can wrap any component with your hoc in order to provide that component with the hoc functionality. In this case it will make the wrapped component a protected component that the user can only visit if authenticated. */}
        <Route path="/feature" component={RequireAuth(Feature)} />
        <Footer />
      </div>
    );
  }
}
