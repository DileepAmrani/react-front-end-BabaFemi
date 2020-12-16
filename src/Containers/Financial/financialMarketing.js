/** @format */

import React, { useState } from "react";
import "./financialMarketing.css";
import Grid from "@material-ui/core/Grid";
import "./../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineFlag,
  AiOutlineEdit,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { FinancialCard, NavBar, TemporaryDrawer } from "./../../Components";
import { FaRegSave, FaRegShareSquare } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Popover from "@material-ui/core/Popover";

export default function FinancialMarketing(props) {
  const [videTitle, setVideoTitle] = useState(
    "why a specialization on investment Management?-UI"
  );
  const [videLink, setVideoLink] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const [videoThumbnail, setVideoThumbnail] = useState(
    "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg"
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notes, setNotes] = React.useState("");
  const [noteArray, setNotesArray] = React.useState([]);
  const courseData = [
    {
      courseTitle: "why a specialization on investment Management?-UI",
      videoDuration: "1 min",
      videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoThumbnail:
        "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg",
    },
    {
      courseTitle: "course syllabuss",
      videoDuration: "5 min",
      videoLink: "http://techslides.com/demos/sample-videos/small.mp4",
      videoThumbnail:
        "https://vidooly.com/blog/wp-content/uploads/2018/12/facebook-video-thumbnail-image.jpg",
    },
    {
      courseTitle: "A word of welcome-OPTIONAL",
      videoDuration: "2 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      videoThumbnail:
        "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg",
    },
    {
      courseTitle: "Introducing to your GFRI team of instructions-OPTIONAL",
      videoDuration: "8 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      videoThumbnail:
        "https://vidooly.com/blog/wp-content/uploads/2018/12/facebook-video-thumbnail-image.jpg",
    },
    {
      courseTitle: "Investment management can be fun-OPTIONAL",
      videoDuration: "4 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      videoThumbnail:
        "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg",
    },
    {
      courseTitle:
        "Some common mistake you will no longer make after this course-Part 1",
      videoDuration: "10 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      videoThumbnail:
        "https://vidooly.com/blog/wp-content/uploads/2018/12/facebook-video-thumbnail-image.jpg",
    },
    {
      courseTitle:
        "Some common mistake you will no longer make after this course-Part 2",
      videoDuration: "6 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoThumbnail:
        "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg",
    },
    {
      courseTitle: "Investment management can be fun-OPTIONAL",
      videoDuration: "4 min",
      videoLink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      videoThumbnail:
        "https://vidooly.com/blog/wp-content/uploads/2018/12/facebook-video-thumbnail-image.jpg",
    },
  ];

  const VideoSecFunc = (title, video, Thumbnail) => {
    setVideoTitle(title);
    setVideoLink(video);
    setVideoThumbnail(Thumbnail);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addNotes = () => {
    alert(notes);
    noteArray.push(notes);
    setNotesArray(noteArray);
    handleClose();
  };
  console.log(noteArray);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="">
      <div className="_navbarDiv">
        <NavBar path={props.history} />
      </div>
      <div className="_sideBarDiv">
        <TemporaryDrawer path={props.history} />
      </div>
      <div className="_subnavbarDiv">
        <div className="_navbarFirstSec">
          <span className="_ink1" onClick={() => props.history.push("detail")}>
            Understanding Financial Markets
          </span>
          <span className="_ink2">{">"}</span>
          <span className="_ink3">Week 1</span>
          <span className="_ink4">{">"}</span>
          <span className="_ink5">{videTitle}</span>
        </div>
        <div className="_navbarSecSec">
          <span className="_ink6">Home</span>
          <span className="_ink6">|</span>
          <span className="_ink6">Next</span>
        </div>
      </div>
      <Grid container justify="center">
        <Grid item lg={2} xs={11} md={2} sm={2}>
          <div className="_financialCard">
            <p className="_financialCardTite">Introduction</p>
            {courseData.map((val, i) => {
              return <FinancialCard data={val} func={VideoSecFunc} key={i}/>;
            })}
          </div>
        </Grid>
        <Grid item lg={8} xs={12} md={8} sm={8}>
          <div className="_midSec">
            <p className="_midSecTitle">{videTitle}</p>
            <Player
              playsInline
              poster={videoThumbnail}
              src={videLink}
              className="_video"
            />
            <div className="_videoCaptionDiv">
              <div className="_saveDiv">
                <FaRegSave color="grey" />
                <span className="_saveNoteTxt">Save Note</span>
                <select className="_downoadDropDown">
                  <option>Download</option>
                  <option>Download</option>
                </select>
              </div>
              <div className="_shareDiv">
                <FaRegShareSquare color="blue" className="_likeIcon" />
                <span className="_shareTxt">Share</span>
                <AiOutlineLike size="20" color="grey" className="_likeIcon" />
                <AiOutlineDislike
                  size="20"
                  color="grey"
                  className="_likeIcon"
                />
                <AiOutlineFlag size="20" color="grey" className="_likeIcon" />
              </div>
            </div>
            <div className="_languageDiv">
              <select className="_languageDropdown">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <p className="_helpTxt">Help Us Translate</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2} xs={10} md={2} sm={2}>
          <div className="_thirdSec">
            <div className="_noteDiv">
              <p className="_noteTxt">Notes</p>
              <p className="_allNotesTxt">
                {" "}
                <BsBoxArrowUpRight /> All notes
              </p>
            </div>
            <AiOutlineFileAdd
              size="40"
              className="_addIcon"
              onClick={handleClick}
            />
            <AiOutlineEdit size="40" className="_addIcon" />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="_popOver">
                <textarea
                  rows="4"
                  cols="30"
                  className="_desInput"
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add Note..."
                >
                </textarea>
                <button className="noteButton" onClick={addNotes}>
                  ADD
                </button>
              </div>
            </Popover>
            <p className="_notePara">
              Click the "Save Note" button when you want to capture a screen.
              You can also highlighted and save lines from the transcript below.
              Add your own notes to anthing you've captured
            </p>
            {noteArray.map((val, i) => {
              return <div className="_noteDiv1">{val}</div>;
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
