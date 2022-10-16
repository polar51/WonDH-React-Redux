import * as React from 'react';
import TextField from '@mui/material/TextField';

const Input = prop => {
  const { text, getValues } = prop;

  return (
    <TextField
      variant="standard"
      label={text}
      onChange={getValues}
      name={text}
    />
  );
};

export default Input;
