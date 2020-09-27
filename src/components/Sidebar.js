import React from "react";
import  SidebarRow  from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import CompassCalibrationIcon from "@material-ui/icons/CompassCalibration";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="首頁" />
      <SidebarRow Icon={WhatshotIcon} title="發燒影片" />
      <SidebarRow Icon={SubscriptionsIcon} title="訂閱內容" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="媒體庫" />
      <SidebarRow Icon={HistoryIcon} title="觀看紀錄" />
      <SidebarRow Icon={OndemandVideoIcon} title="你的影片" />
      <SidebarRow Icon={WatchLaterIcon} title="稍後觀看" />
      <SidebarRow Icon={ThumbUpAltIcon} title="喜歡的影片" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="顯示更多" />
      <hr />
      <h4>更多 YOUTUBE 內容</h4>
      <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
      <SidebarRow Icon={SportsEsportsIcon} title="遊戲" />
      <SidebarRow Icon={CompassCalibrationIcon} title="直播" />
      <hr />
      <SidebarRow Icon={SettingsIcon} title="設定" />
      <SidebarRow Icon={FlagIcon} title="檢舉紀錄" />
      <SidebarRow Icon={HelpIcon} title="說明" />
      <SidebarRow Icon={QuestionAnswerIcon} title="提供意見" />
    </div>
  );
};

export default Sidebar;
