import React from 'react';
import { Media } from 'reactstrap';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="videoListItem list-group-item mb-2">
      <div className="videoListItem__box media">
        <div className="videoListItem__box__imageBox media-left mr-3">
          <img className="videoListItem__box__imageBox__image media-object rounded" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="videoListItem__box__videoTitle media-heading font-weight-bold text-uppercase">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
