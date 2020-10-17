import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

// Need to really dig into the theming logic of material ui.
const useStyles = makeStyles((theme) =>
  createStyles ({
    root: {
      padding: theme.spacing(1),
    },
  })
);

const EntryListController = (props) => {
  const classes = useStyles({});

  return (
    <>
      <Box display="flex" bgcolor="info.main"><Typography className={classes.root}>List Controller</Typography></Box>
    </>
  )
}

export default EntryListController;