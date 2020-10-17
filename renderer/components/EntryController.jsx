import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Need to really dig into the theming logic of material ui.
const useStyles = makeStyles((theme) =>
  createStyles ({
    root: {
      padding: theme.spacing(1),
    },
  })
);

const EntryController = (props) => {

  const classes = useStyles({});

  return (
    <>
      <Box display="flex">
        <TextField bgcolor="white" multiline fullWidth variant="outlined" rows="30" rowsMax="30"></TextField>
        <Button variant="contained">Save Entry</Button>
      </Box>
    </>

  )
}

export default EntryController;