/** @format */

import React from "react";
import "./home.css";
import { BiLocationPlus, BiSearch } from "react-icons/bi";
import {
  Card,
  TeamCard,
  ServiceCard,
  Footer,
  NavBar,
  TemporaryDrawer,
} from "./../../Components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardImage1 from "./../../Images/ijmb.png";
import CardImage2 from "./../../Images/skillset.png";
import CardImage3 from "./../../Images/jamb.png";
import CardImage4 from "./../../Images/sat.png";
import CardImage5 from "./../../Images/postUTME.png";
import CardImage6 from "./../../Images/act.png";
import CardImage7 from "./../../Images/tech.png";
import CardImage8 from "./../../Images/waec.png";
import SinupIcon from './../../Images/examination.png';
import GroupIcon from './../../Images/people.png';
import ImproveIcon from './../../Images/skills.png';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: [
        {
          cardImage: SinupIcon,
          cardTitle: "Sign up",
          cardDes:
            "Are you looking to join selline intstitutions? Now it's very simple, Signup with mentoring.",
        },
        {
          cardImage: GroupIcon,
          cardTitle: "Collaborate",
          cardDes:
            "Are you looking to join selline intstitutions? Now it's very simple, Signup with mentoring.",
        },
        {
          cardImage: ImproveIcon,
          cardTitle: "Improve & Get Back",
          cardDes:
            "Are you looking to join selline intstitutions? Now it's very simple, Signup with mentoring.",
        },
      ],
      teamCard: [
        {
          cardImage: CardImage1,
          title: "Digital Marketer",
        },
        {
          cardImage: CardImage2,
          title: "Ui Designer",
        },
        {
          cardImage: CardImage3,
          title: "IT Security",
        },
        {
          cardImage: CardImage4,
          title: "Front-end Developer",
        },
        {
          cardImage: CardImage5,
          title: "Web Developer",
        },
        {
          cardImage: CardImage6,
          title: "Administrator",
        },
        {
          cardImage: CardImage7,
          title: "Project Manager",
        },
        {
          cardImage: CardImage8,
          title: "PHP Developer",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="_navbarDiv">
          <NavBar path={this.props.history} />
        </div>
        <div className="_sideBarDiv">
          <TemporaryDrawer path={this.props.history} />
        </div>
        {/* header */}
        <div className="_headerDiv">
          <div className="_headerColorBox">
            <p className="_headerTitle">
              <span>Search Teacher in </span>
              <span className="_headerSubTxt1">Mentoring</span>
              <br />
              <span className="_headerSubTxt1">Appointment</span>
            </p>
            <p className="_headerDes">
              Discover the best Mentores and Institutions the city nearest to
              you
            </p>
            <Container>
              <Grid container justify="center" spacing={1}>
                <Grid item lg={2} xs={4}>
                  <div className="inputDiv">
                    <BiLocationPlus className="_locationIcon" />
                    <input
                      type="text"
                      className="_input"
                      placeholder="Search location"
                    />
                  </div>
                </Grid>
                <Grid item lg={3} xs={6}>
                  <div className="inputDiv1">
                    <BiSearch className="_locationIcon" />
                    <input
                      type="text"
                      className="_input1"
                      placeholder="Search school, online educational centers, etc"
                    />
                  </div>
                </Grid>
                <Grid item lg={1} xs={2}>
                  <button className="_searchBtn">
                    <BiSearch color="white" />
                  </button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>

        <div className="_howItWorks">
          <div>
            <p className="_para1">MENTORING FLOW</p>
            <p className="_para2">How does it works ?</p>
            <p className="_para3">
              Are you looking to join selline intstitutions? Now it's very
              simple, Signup with mentoring.
            </p>

            <Container maxWidth="lg">
              <Grid container>
                {this.state.cardData.map((val) => {
                  return (
                    <Grid item lg={4}>
                      <div className="_card">
                        <Card data={val} />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>
        </div>

        <div className="_teamdiv">
          <Container maxWidth="lg">
            <Grid container justify="center" spacing={2}>
              {this.state.teamCard.map((v, i) => {
                return (
                  <Grid item lg={3} xs={11} key={i}>
                    <div className="_teamCard">
                      <TeamCard Image={v.cardImage} title={v.title} />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
          <button className="_viewAllBtn">View all</button>
        </div>

        <div className="_serviceCardDiv">
          <Container>
            <Grid container justify="center" spacing={3}>
              <Grid item lg={4} xs={11}>
                <div className="_cardDiv1">
                  <ServiceCard path={this.props.history} />
                </div>
              </Grid>
              <Grid item lg={4} xs={11}>
                <div className="_cardDiv1">
                  <ServiceCard path={this.props.history} />
                </div>
              </Grid>
              <Grid item lg={4} xs={11}>
                <div className="_cardDiv1">
                  <ServiceCard path={this.props.history} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
