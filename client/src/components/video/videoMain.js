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
      <div className="videoMain embed-responsive embed-responsive-16by9 mt-5">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details mt-3">
        <Card className="mb-3">
          <CardBody>
            <CardTitle className="details__title">{title}</CardTitle>
            <CardText className="details__description">{description}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default VideoMain;
