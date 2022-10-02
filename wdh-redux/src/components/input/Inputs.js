import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const Inputs = text => {
  const defaultValue = text;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder={defaultValue.text} inputProps={ariaLabel} />
    </Box>
  );
};

export default Inputs;
