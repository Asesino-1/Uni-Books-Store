import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
const useStyles = makeStyles({
  drawerSlider: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
});
const LoggedOutNavbar = (props) => {
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => 
        props.history.push("/homepage")
    },
    {
      text: "Sign up",
      icon: <PersonAddIcon />,
      onClick: () => 
        props.history.push("/sign-up")
    },
    {
      text: "Login",
      icon: <ExitToAppIcon />,
      onClick: () => {
        props.history.push("/login");
      },
    },
  ];
  const [state, setState] = useState({
    right: false,
  });
  const toggle = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box onClick={toggle(slider, false)}>
      <List>
        {itemsList.map((index, key) => (
          <ListItem button key={key} onClick = {index.onClick}>
            <ListItemIcon>{index.icon}</ListItemIcon>
            <ListItemText primary={index.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar style={{ background: "#1F2236" }}>
          <Toolbar>
            <IconButton onClick={toggle("right", true)}>
              <MenuIcon style={{ color: "#ffffff" }} />
            </IconButton>
            <Typography variant="h5" align="center">
              {" UBS "}
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              onClose={toggle("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default withRouter(LoggedOutNavbar);