import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import {
  BsFillChatDotsFill, BsFillBagFill,
  BsFillCameraVideoFill,
  BsFillBookmarkStarFill,
  BsQuestionSquareFill,
} from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <BsFillChatDotsFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BsFillCameraVideoFill className="sidebarIcon" />
            <span className="sidebarListItemText"> Videos</span>
          </li>
          <li className="sidebarListItem">
            <GrGamepad className="sidebarIcon"/>
            <span className="sidebarListItemText">Games</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkStarFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquareFill className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBagFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <GiShop className="sidebarIcon"/>
            <span className="sidebarListItemText">Shopping</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/serkan.png"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Serkan Demir </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/erkan.png"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Erkan Günes</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/5.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Meghan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/6.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Lisa</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/7.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Hadise</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/8.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Jesus</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/10.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Blander</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Koç</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/1.jpeg.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendNamw">Blander</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
