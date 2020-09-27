import React from "react";
import  Video  from "./Video";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

const SearchPage = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    // <Video onVideoSelect={onVideoSelect} key={id} video={video} />
    <Video key={id} video={video} onVideoSelect={onVideoSelect} />
  ));

  console.log(listOfVideos);
  return (
    <div className="search-page">
      <div className="search-page__filter">
        <TuneOutlinedIcon />
        <h2>篩選器</h2>
      </div>
      <hr />
      {listOfVideos}
    </div>
  );
};

export default SearchPage;
