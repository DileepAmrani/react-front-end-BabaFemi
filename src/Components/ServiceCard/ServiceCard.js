/** @format */

import React from "react";
import ServiceImage from "./../../Images/1.jpg";
import "./ServiceCard.css";
import { BsAlarm } from "react-icons/bs";
import { Rating } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default class ServiceCard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 5,
    };
  }
  render() {
    // console.log(this.props);
    return (
      <div className="serviceCardDiv">
        <img src={ServiceImage} className="_serviceCardImage" alt="images" />
        <p className="_serviceBtn">HEALTH & FITNESS</p>
        <div className="_profileDiv">
          <img
            src="https://1.bp.blogspot.com/-8zD51KOc_Ls/XmSZZ47xsNI/AAAAAAAAPS0/m4yP8Kr7VY4c06N3cH9aLbKbuqwXqF5QQCLcBGAsYHQ/s1600/sweet%2Bdp%2Bfor%2Bwhatsapp%2Bprofile%2B%25281%2529.gif"
            className="_profileImage"
            alt="images"
          />
          <span className="_txt">by</span>
          <span className="_name">Dileep Amrani</span>
        </div>
        <p className="_serviceTitle">Healthy workout tips</p>
        <div className="_ratingDiv">
          <Rating
            name="simple-controlled"
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setState({ value: newValue });
            }}
            className="_stars"
            size="small"
          />
          <span className="_ratings">4.8</span>
          <span className="_projects">300</span>
        </div>

        <div className="_durationDiv">
          <Container>
            <Grid container justify="center">
              <Grid item lg={4} xs={4}>
                <div>
                  <BsAlarm />
                  <span className="_durationTxt">10 hours</span>
                </div>
              </Grid>
              <Grid item lg={4} xs={5}>
                <div>
                  <BsAlarm />
                  <span className="_lectureTxt">6 Lectures</span>
                </div>
              </Grid>
              <Grid item lg={4} xs={3}>
                <div>
                  <span className="_priceTxt">$18</span>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <button
          onClick={() => this.props.path.push("detail")}
          className="_previewBtn"
        >
          See Preview
        </button>
      </div>
    );
  }
}
