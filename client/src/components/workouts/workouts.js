import React, { Component } from 'react';
import { Container } from 'reactstrap';

import WorkoutList from './workoutlist';

import WorkoutData from './workoutData';
import '../../../styles/workoutStyle.css';

class Workouts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutArray: WorkoutData
    };
  }

  render() {
    return (
      <div className="container workout-main">
        <h1 className="text-center">Workouts</h1>
        <WorkoutList workoutArray={this.state.workoutArray} />
      </div>
    );
  }
}

export default Workouts;
