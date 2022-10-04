import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

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
      <Input placeholder={defaultValue.text} />
    </Box>
  );
};

export default Inputs;
