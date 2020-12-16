import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Footer, NavBar, TemporaryDrawer } from "./../../Components";
import "./courseDetail.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Rating } from "@material-ui/lab";
import ServiceImage from "./../../Images/1.jpg";
import { AiOutlineClockCircle, AiFillFolderOpen } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
import { BsCaretRightFill, BsFlag } from "react-icons/bs";
import TabPanel from './../../Components/Tab/tab'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1),
  },
}));

export default function CourseDetail(props) {
  const classes = useStyles();
  const [ratingValue, setRatingValue] = useState(5);

  return (
    <div>
      <div className="_navbarDiv">
        <NavBar path={props.history} />
      </div>
      <div className="_sideBarDiv">
        <TemporaryDrawer path={props.history} />
      </div>
      <div className="_courseHeader">
        <div className="_pagesNamesDiv">
          <span className="_HomePageName">Home -</span>
          <span className="_coursePageName">Course Details</span>
        </div>
        <p className="_pageTitle">COURSES DETAILS</p>
      </div>

      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} lg={8} xl={8}>
            <div>
              <div className="detailCardHeader">
                <Avatar
                  alt="Remy Sharp"
                  // src="/static/images/avatar/1.jpg"
                  className={classes.large}
                />
                <span style={{ marginRight: "5px" }}>by </span>
                <span className="instructorName">Addie Walter</span>
              </div>
              <p className="title">Improve Editing Skills</p>
              <p className="categary">Marketing</p>
              <div className="_ratingsDiv">
                <Rating
                  name="simple-controlled"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                  className="_stars"
                  size="small"
                />
                <span className="_ratings">4.8</span>
                <span className="_detailProjects">250</span>
              </div>
              <img src={ServiceImage} className="_detailImage" alt="serviceImage"/>
              <TabPanel />
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={4}>
            <div>
              <div className="_priceDiv">
                <p className="_courseDetailTitle">COURSE DETAIL</p>
                <p className="_priceTxt1">$18.00</p>
                <button className="_buyCourseBtn">Buy This Course</button>
              </div>

              <div className="_coursesDetailDiv">
                <div className="courseDurationDiv">
                  <AiOutlineClockCircle
                    className="_durationIcon"
                    size="30"
                    color="white"
                  />
                  <span className="_txt1">Duration</span>
                  <span className="_txt2">10 hours</span>
                </div>
                <div className="courseDurationDiv">
                  <AiFillFolderOpen
                    className="_lectureIcon"
                    size="30"
                    color="white"
                  />
                  <span className="_txt1">Lecture</span>
                  <span className="_txt2">6</span>
                </div>
                <div className="courseDurationDiv">
                  <BiUserCircle
                    className="_userIcon"
                    size="30"
                    color="white"
                  />
                  <span className="_txt1">Students:</span>
                  <span className="_txt2">Max 4</span>
                </div>
                <div className="courseDurationDiv" onClick={() => props.history.push("financialMarketing")}>
                  <BsCaretRightFill
                    className="_videoIcon"
                    size="30"
                    color="white"
                  />
                  <span className="_txt1">Video:</span>
                  <span className="_txt2">8 hours</span>
                </div>
                <div className="courseDurationDiv">
                  <BsFlag className="_skillnIcon" size="30" color="white" />
                  <span className="_txt1">Skill Level:</span>
                  <span className="_txt2">Advanced</span>
                </div>
                <div className="courseDurationDiv">
                  <BiBell className="_languageIcon" size="30" color="white" />
                  <span className="_txt1">Language:</span>
                  <span className="_txt2">English</span>
                </div>
              </div>
              <div className="_otherCoursesDiv">
                <p className="_newCoursesTitle">New Courses</p>
                <div className="_newCoursesDiv">
                  <Grid container justify="center" spacing={1}>
                    <Grid item lg={4} xs={8}>
                      <div>
                        <img
                          src="https://1.bp.blogspot.com/-8zD51KOc_Ls/XmSZZ47xsNI/AAAAAAAAPS0/m4yP8Kr7VY4c06N3cH9aLbKbuqwXqF5QQCLcBGAsYHQ/s1600/sweet%2Bdp%2Bfor%2Bwhatsapp%2Bprofile%2B%25281%2529.gif"
                          className="_newCourseImg"
                          alt="courseimage"
                        />
                      </div>
                    </Grid>
                    <Grid item lg={8}>
                      <div>
                        <div className="_trainerNameDiv">
                          <span className="_by">by</span>
                          <span className="_trainerName">Lydia Byrd</span>
                        </div>
                        <p className="_newCourseName">Marketing Strategies</p>
                        <div className="_ratingsDiv2">
                          <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                            className="_stars"
                            size="small"
                          />
                          <span className="_ratings">4.8</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div className="_newCoursesDiv">
                  <Grid container justify="center" spacing={1}>
                    <Grid item lg={4} xs={8}>
                      <div>
                        <img
                          src="https://1.bp.blogspot.com/-8zD51KOc_Ls/XmSZZ47xsNI/AAAAAAAAPS0/m4yP8Kr7VY4c06N3cH9aLbKbuqwXqF5QQCLcBGAsYHQ/s1600/sweet%2Bdp%2Bfor%2Bwhatsapp%2Bprofile%2B%25281%2529.gif"
                          className="_newCourseImg"
                          alt="newCourseImg"
                        />
                      </div>
                    </Grid>
                    <Grid item lg={8}>
                      <div>
                        <div className="_trainerNameDiv">
                          <span className="_by">by</span>
                          <span className="_trainerName">Lydia Byrd</span>
                        </div>
                        <p className="_newCourseName">Marketing Strategies</p>
                        <div className="_ratingsDiv2">
                          <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                            className="_stars"
                            size="small"
                          />
                          <span className="_ratings">4.8</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="_newCoursesDiv">
                  <Grid container justify="center" spacing={1}>
                    <Grid item lg={4} xs={8}>
                      <div>
                        <img
                          src="https://1.bp.blogspot.com/-8zD51KOc_Ls/XmSZZ47xsNI/AAAAAAAAPS0/m4yP8Kr7VY4c06N3cH9aLbKbuqwXqF5QQCLcBGAsYHQ/s1600/sweet%2Bdp%2Bfor%2Bwhatsapp%2Bprofile%2B%25281%2529.gif"
                          className="_newCourseImg"
                          alt="newCourseImg"
                        />
                      </div>
                    </Grid>
                    <Grid item lg={8}>
                      <div>
                        <div className="_trainerNameDiv">
                          <span className="_by">by</span>
                          <span className="_trainerName">Lydia Byrd</span>
                        </div>
                        <p className="_newCourseName">Marketing Strategies</p>
                        <div className="_ratingsDiv2">
                          <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                            className="_stars"
                            size="small"
                          />
                          <span className="_ratings">4.8</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
