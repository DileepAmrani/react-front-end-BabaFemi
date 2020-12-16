/** @format */

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AiTwotoneMessage } from "react-icons/ai";
import { BsCaretRightFill } from "react-icons/bs";
import "./tab.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="black"
          className="_tabs"
        >
          <LinkTab label="Overview" className="_tabLink" {...a11yProps(0)} />
          <LinkTab label="Curriculum" className="_tabLink" {...a11yProps(1)} />
          <LinkTab label="Reviews" className="_tabLink" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="_curriculumHeading">Start beginners level course</p>
        <p className="_curriculumDes">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </p>
        <div className="_previewDiv">
          <div className="_previewDiv1">
            <BsCaretRightFill
              className="_previewVideoIcon"
              size="20"
              color="white"
            />
            <span className="_previewTxt1">Introduction to Editing</span>
            <span className="_previewTxt2">Preview</span>
          </div>
          <div>
            <p className="_previewTxt3">16 minutes</p>
          </div>
        </div>
        <div className="_previewDiv">
          <div className="_previewDiv1">
            <BsCaretRightFill
              className="_previewVideoIcon"
              size="20"
              color="white"
            />
            <span className="_previewTxt1">Overview Editing</span>
            <span className="_previewTxt2">Preview</span>
          </div>
          <div>
            <p className="_previewTxt3">16 minutes</p>
          </div>
        </div>
        <div className="_previewDiv">
          <div className="_previewDiv1">
            <BsCaretRightFill
              className="_previewTechIcon"
              size="20"
              color="white"
            />
            <span className="_previewTxt1">Basic Editing Technology</span>
            <span className="_previewTxt2">Preview</span>
          </div>
        </div>
        <div className="_previewDiv">
          <div className="_previewDiv1">
            <AiTwotoneMessage
              className="_previewQuizIcon"
              size="20"
              color="white"
            />
            <span className="_previewTxt1">Quiz</span>
          </div>
          <div>
            <p className="_previewTxt3">6 question</p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}
