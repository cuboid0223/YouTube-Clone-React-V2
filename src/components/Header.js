import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = ({ onFormSubmit }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputSearch);
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="burgerIcon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Almost-Black-Logo.wine.svg"
            alt="youtubeLogo"
          />
        </Link>
      </div>
      <form className="header__center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="搜尋"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button onClick={handleSubmit}>
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__searchBtn" />
          </Link>
        </Button>
      </form>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
