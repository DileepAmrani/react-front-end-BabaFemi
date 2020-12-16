/** @format */

import React from "react";
import { BiLocationPlus, BiSearch } from "react-icons/bi";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ServiceCard, Footer, NavBar,TemporaryDrawer } from "./../../Components";
import Pagination from '@material-ui/lab/Pagination';

import "./courses.css";



export default function Courses(props) {
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
          <span className="_HomePageName">Home</span>
          <span className="_coursePageName">Courses</span>
        </div>
        <p className="_pageTitle">COURSES</p>
      </div>
      <div className="_courseSearchDiv">
        <Container>
          <Grid container justify="center" spacing={1}>
            <Grid item lg={2} xs={4}>
              <div className="_courseInputDiv">
                <BiLocationPlus className="_locationIcon" />
                <input
                  type="text"
                  className="_courseInput"
                  placeholder="search location"
                />
              </div>
            </Grid>
            <Grid item lg={3} xs={6}>
              <div className="_courseInputDiv1">
                <BiSearch className="_courselocationIcon" />
                <input
                  type="text"
                  className="_courseInput1"
                  placeholder="search school, online educational centers, etc"
                />
              </div>
            </Grid>
            <Grid item lg={1} xs={2}>
              <button className="_courseSearchBtn">
                <BiSearch color="white" />
              </button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
          <Grid item lg={4} xs={11}>
            <div className="_courseCardDiv">
              <ServiceCard path={props.history} />
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="_pagination" >
        <Pagination count={10} color="primary" className="_paginationClass" />
      </div>
      <Footer />
    </div>
  );
}
