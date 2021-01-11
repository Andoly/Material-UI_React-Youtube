import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AccountCircle from "@material-ui/icons/AccountCircle";


const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    height: "100vh",
  },
  AppBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
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
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  ListItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Início"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Em alta"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Biblioteca"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Histórico"}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={5}>
            <Typography variant="body1">
              Faça login para curtir vídeos, comentar e se inscrever
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};
export default Home;
