import React from 'react';

import SingleWorkout from './singleWorkout';

const WorkoutList = ({ workoutArray }) => {
  const renderWorkouts = workouts => {
    return workouts.map((workout, index) => {
      return <SingleWorkout key={index} workout={workout} />;
    });
  };

  return <div>{renderWorkouts(workoutArray)}</div>;
};

export default WorkoutList;
