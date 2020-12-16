import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AiFillCaretDown } from "react-icons/ai";
import './navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    border:"2px solid black"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily:"'Montserrat', sans-serif",
    fontWeight:"bold"
  },
  pageLink:{
    fontFamily:"'Montserrat', sans-serif",
    fontWeight:"bold",
    margin:10,
    color:"black",
    cursor:"pointer"
  },
  dropDownPage:{
    fontWeight:"bold",
    fontSize:16
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar  id="_navbar" style={{backgroundColor:"white",color:"black",fontFamily:"'Montserrat', sans-serif"}}>
          <Typography variant="h6" className={classes.title}>
           MENTORING
          </Typography>
          <Typography  className={classes.pageLink} onClick={()=>props.path.push("/")}>
            Home
          </Typography>
          <Typography  className={classes.pageLink} onClick={()=>props.path.push("courses")}>
            Courses
          </Typography>
          <div className="_dropDown">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.dropDownPage}
            >
              Mentor
              <AiFillCaretDown size="15"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <div className="_dropDown">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.dropDownPage}
            >
              Mentee
              <AiFillCaretDown size="15"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <div className="_dropDown">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.dropDownPage}
            >
              Pages
              <AiFillCaretDown size="15"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <div className="_dropDown">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.dropDownPage}
            >
              Blog
              <AiFillCaretDown size="15"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <Typography  className={classes.pageLink}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
