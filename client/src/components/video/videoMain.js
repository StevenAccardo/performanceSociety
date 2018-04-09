import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const VideoMain = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div className="text-white">Loading...</div>;
  }

  const { title, description } = selectedVideo.snippet;
  //const { url, height, width } = snippet.thumbnails.defualt;
  const { videoId } = selectedVideo.snippet.resourceId;

  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="video-main embed-responsive embed-responsive-16by9 mt-5">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details mt-3">
        <Card className="mb-3">
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

// <CardBody>
//   <CardTitle className="text-center mb-3 font-weight-bold">{title}</CardTitle>
//   <CardSubtitle className="text-center mb-3 font-weight-bold">{date}</CardSubtitle>
//   <div className="card-text text-center">{renderWorkouts(workouts)}</div>
// </CardBody>

export default VideoMain;
