import React, { Component } from 'react';
import { Container } from 'reactstrap';

import WorkoutList from './workoutlist';

import WorkoutData from './workoutData';

class Workouts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutArray: WorkoutData
    };
  }

  render() {
    return (
      <div className="container workoutPage">
        <h1 className="workoutPage__title">Workouts</h1>
        <WorkoutList workoutArray={this.state.workoutArray} />
      </div>
    );
  }
}

export default Workouts;
