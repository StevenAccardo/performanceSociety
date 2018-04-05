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
      <Container>
        <h1 className="text-center">Workouts</h1>
        <WorkoutList workoutArray={this.state.workoutArray} />
      </Container>
    );
  }
}

export default Workouts;
