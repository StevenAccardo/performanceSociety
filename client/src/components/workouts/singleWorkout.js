import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const SingleWorkout = ({ workout: { title, date, workouts } }) => {
  const renderWorkouts = workouts => {
    return workouts.map((workout, index) => {
      return <p key={index}>{workout}</p>;
    });
  };

  return (
    <div>
      <Card className="workoutCard mb-3">
        <CardBody>
          <CardTitle className="text-center mb-3 font-weight-bold">{title}</CardTitle>
          <CardSubtitle className="text-center mb-3 font-weight-bold">{date}</CardSubtitle>
          <CardText className="text-center">{renderWorkouts(workouts)}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleWorkout;
