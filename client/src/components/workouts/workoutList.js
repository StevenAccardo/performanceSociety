import React from 'react';

import SingleWorkout from './singleWorkout';

const WorkoutList = ({ workoutArray }) => {
  const renderWorkouts = workouts => {
    return workouts.map((workout, index) => {
      return <SingleWorkout key={index} workout={workout} />;
    });
  };

  return <div className="workoutList pb-2">{renderWorkouts(workoutArray)}</div>;
};

export default WorkoutList;
