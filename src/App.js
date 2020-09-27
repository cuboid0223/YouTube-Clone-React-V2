import React, { useState, useEffect } from "react";
import "./scss/all.css";
import {
  Header,
  Sidebar,
  SearchPage,
  VideoDetail,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import youtube from "./api/youtube";
import { useHistory } from "react-router-dom";

function App() {
  // state = {
  //   videos: [],
  //   selectedVideo: null,
  // };

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const history = useHistory();

  useEffect(() => {
    handleSubmit("f.nix");
  
  }, []);

  //  const onVideoSelect = (video) => {
  //    this.setState({ selectedVideo: video });
  //  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log("video is ", video);
  };

  const handleSubmit = async (inputSearch) => {
   
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyB0xTIo8dLxjuYf09JzzvaXdkDG-9y_K9w",
        q: inputSearch,
      },
    });
    console.log("response", response.data.items);
   
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="app">
      <Router>
        <Header onFormSubmit={handleSubmit} />
        <Switch>
          {/* search detail page */}
          <Route path="/searchDetail">
            <div className="app__page detailPage">
              <VideoDetail video={selectedVideo} />
              <SearchPage videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </Route>

          {/* search page */}
          <Route path="/search/:inputSearch">
            <div className="app__page searchPage">
              <Sidebar />
              <SearchPage videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </Route>

          {/* home page */}
          <Route path="/">
            <div className="app__page homePage">
              <Sidebar />
              <SearchPage videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
