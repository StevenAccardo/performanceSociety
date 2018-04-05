import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videoArray, onVideoSelect }) => {
  const renderList = videos => {
    return videos.map(video => {
      return <VideoListItem key={video.etag} onVideoSelect={onVideoSelect} video={video} />;
    });
  };
  return <div className="col-md-8">{renderList(videoArray)}</div>;
};

export default VideoList;
