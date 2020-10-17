import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
      <Box display="flex"><TextField multiline fullWidth variant="outlined" rows="30" rowsMax="30"></TextField></Box>
    </>

  )
}

export default EntryController;