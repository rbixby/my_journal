import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EntryListController from '../components/EntryListController';
import EntryController from '../components/EntryController';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: 'left',
      flexGrow: 1,
    }
  })
);

const Home = () => {
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(false);
  const handleClick = () => setOpen(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Home - My Journal</title>
      </Head>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleMenu}>
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menuy-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>File</MenuItem>
              <MenuItem onClick={handleClose}>Search etc.</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              My journaling Tool
            </Typography>
          </Toolbar>
        </AppBar>
        <Box display="flex">
          <Box bgcolor="info.main" width="33vw" height="95vh">
            <EntryListController/>
          </Box>
          <Box flexGrow="1" bgcolor="success.main" >
            <EntryController/>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Home;
