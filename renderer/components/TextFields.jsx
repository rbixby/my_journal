import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { borderedTextFieldStylesHook } from '@mui-treasury/styles/textField/bordered';

const BorderedTextFieldStyle = () => {
  const inputBaseStyles = borderedTextFieldStylesHook.useInputBase();
  const inputLabelStyles = borderedTextFieldStylesHook.useInputLabel();
  return (
    <div>
      <TextField
        label={'Label'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <Box />
      <TextField
        label={'Label'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        disabled
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <Box />
      <TextField
        error
        label={'Label'}
        placeholder={'Placeholder'}
        helperText={'Helper Text'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
    </div>
  );
};

export default BorderedTextFieldStyle;