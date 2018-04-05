import React from 'react';

const VideoMain = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const { title, description } = selectedVideo.snippet;
  //const { url, height, width } = snippet.thumbnails.defualt;
  const { videoId } = selectedVideo.snippet.resourceId;

  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoMain;
