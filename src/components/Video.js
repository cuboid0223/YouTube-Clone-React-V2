import React from 'react'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Video = ({ video, onVideoSelect }) => {
  const channelId = video.id.channelId
  return (
    <Link to="/searchDetail" className="link-react-router-dom">
      <div className={`video`} onClick={() => onVideoSelect(video)}>
        <img
          className="video__thumbnail"
          src={video.snippet.thumbnails.high.url}
          alt="thumbnail"
        />
        <div className="video__info">
          <Avatar className="video__avatar" />
          <div className="video__text">
            <h4 className="video__title">{video.snippet.title}</h4>
            <p className="video__channelTitle">{video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Video
