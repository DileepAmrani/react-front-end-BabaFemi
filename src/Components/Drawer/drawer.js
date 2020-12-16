import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import './drawer.css'

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"

        >
            <List>
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={()=>props.path.push("/")}>
                    <div className="_drawerPageLInk">Home</div>
                </ListItem>
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={()=>props.path.push("courses")}>
                    <div className="_drawerPageLInk">Courses</div>
                </ListItem>
                <ListItem button>
                    <select className="_drawerDropDown">
                        <option>Mentor</option>
                        <option>Mentor</option>
                        <option>Mentor</option>
                    </select>
                </ListItem>
                <ListItem button>
                    <select className="_drawerDropDown">
                        <option>Mentee</option>
                        <option>Mentee</option>
                        <option>Mentee</option>
                    </select>
                </ListItem>
                <ListItem button>
                    <select className="_drawerDropDown">
                        <option>Pages</option>
                        <option>Pages</option>
                        <option>Pages</option>
                    </select>
                </ListItem>
                <ListItem button>
                    <select className="_drawerDropDown">
                        <option>Blog</option>
                        <option>Blog</option>
                        <option>Blog</option>
                    </select>
                </ListItem>
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">Admin</div>
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar >
            <div style={{ backgroundColor: "white", padding: 10 }}>
                {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                        <span className="_siteTitle">MENTORING</span>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </AppBar>
    );
}
