import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    height: "100vh",
  },
  AppBar: {
    boxShadow: "none",
  },
  logo: {
    height: 25,
  },
  br: {
    paddingTop: "-5px",
    fontSize: "10px",
  },
  menuIcon: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.logo}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/images/logo_preta.png"
            alt="logo"
            className={classes.logo}
          />
          <span className={classes.br}>BR</span>
          <div className={classes.grow} />
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <VideoCallIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
