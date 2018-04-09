import React from 'react';
import { Media } from 'reactstrap';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="video-list-item list-group-item mb-2">
      <div className="video-list media">
        <div className="media-left mr-3">
          <img className="media-object rounded" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading font-weight-bold text-uppercase">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
