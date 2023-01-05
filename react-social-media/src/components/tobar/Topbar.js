import { FiSearch } from "react-icons/fi";
import "./topbar.css";
import { BsPersonFill } from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <img className="logoImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBEOcjPPVl-dKhMQLag_OaUnSQP-5JbOPiQ&usqp=CAU" alt=""/>
        <span className="logo">SOCİAL MEDİA</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FiSearch className="searchIcons" />
          <br />
          <input
            placeholder="Search for friend,post..."
            className="searchInput"
          ></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home Page</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsIthem">
            <br />
            <BsPersonFill />
            <span className="topbarIconBande">1</span>
          </div>
          <div className="topbarIconsIthem">
            <br />
            <IoChatboxEllipses />
            <span className="topbarIconBande">2</span>
          </div>
          <div className="topbarIconsIthem">
            <br />
            <MdNotificationsActive />
            <span className="topbarIconBande">1</span>
          </div>
        </div>
        <img src="/assets/serkan.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
