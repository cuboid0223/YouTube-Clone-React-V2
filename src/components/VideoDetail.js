import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>loading....</div>;
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="videoDetail" id="videoDetail">
      <div className="videoDetail__video">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </div>
      <div className="videoDetail__info">
        <h4>{video.snippet.title}</h4>
        <hr />
        <div className="videoDetail__channel-box">
          <h5 className="videoDetail__publisher">
            {video.snippet.channelTitle}
          </h5>
          <button>訂閱</button>
        </div>

        <p className="videoDetail__description">{video.snippet.description}</p>
        <hr />
      </div>
    </div>
  );
};

export default VideoDetail;
