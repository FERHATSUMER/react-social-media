import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/serkan.png"
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="What's in your min Jesus  "
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia className="shareIcons" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <AiFillFolderOpen className="shareIcons" />
              <span className="shareOptionText">Add File</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiSunglassesFill className="shareIcons" />
              <span className="shareOptionText">Emojis</span>
            </div>
            <div className="shareOption">
              <GrLocation className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
