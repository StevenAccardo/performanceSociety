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
      <Card className="mb-3">
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{date}</CardSubtitle>
          <div className="card-text text-center">{renderWorkouts(workouts)}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleWorkout;
