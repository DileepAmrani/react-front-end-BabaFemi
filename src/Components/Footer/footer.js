/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="_footerDiv">
        <Container>
          <Grid container justify="center" spacing={3}>
            <Grid item lg={3} xs={10}>
              <div>
                <p className="_siteTitle">MENTORING</p>
                <p className="_siteDes">
                  Are you looking to join selline intstitutions? Now it's very
                  simple, Signup with mentoring.Are you looking to join selline
                  intstitutions? Now it's very simple, Signup with mentoring.
                </p>
                <div className="_socialIconDiv">
                  <AiFillFacebook size="24" className="_socialIcon"/>
                  <AiFillTwitterSquare size="24" className="_socialIcon"/>
                  <AiFillLinkedin size="24" className="_socialIcon"/>
                  <AiFillInstagram size="24" className="_socialIcon"/>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} xs={10}>
              <div>
                <p className="_pagesHeading">For Mentores</p>
                <p className="_pageName">Search Mentore</p>
                <p className="_pageName">Login</p>
                <p className="_pageName">Register</p>
                <p className="_pageName">Booking</p>
                <p className="_pageName">Mentore Dashboard</p>
              </div>
            </Grid>
            <Grid item lg={3} xs={10}>
              <div>
                <p className="_pagesHeading">For Mentores</p>
                <p className="_pageName">Search Mentore</p>
                <p className="_pageName">Login</p>
                <p className="_pageName">Register</p>
                <p className="_pageName">Booking</p>
                <p className="_pageName">Mentore Dashboard</p>
              </div>
            </Grid>
            <Grid item lg={3} xs={10}>
              <div className="_footerContactDiv">
                <p className="_pagesHeading">Contact Us</p>
                <div>
                  <BiLocationPlus />
                  <span className="_contactUsTxt">Near Suther Colony Shchool Mithi</span>
                </div>
                <div>
                  <BiPhone />
                  <span className="_contactUsTxt">+1323 233 784</span>
                </div>
                <div>
                  <AiFillMail />
                  <span className="_contactUsTxt">beerkumar784@gmail.com</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
