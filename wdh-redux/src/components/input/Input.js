import * as React from 'react';
import TextField from '@mui/material/TextField';

const Input = prop => {
  const { text, value, getValues } = prop;

  const handleChange = event => {
    getValues({
      ...value,
      [text]: event.target.value,
    });
  };
  return <TextField variant="standard" label={text} onChange={handleChange} />;
};

export default Input;
