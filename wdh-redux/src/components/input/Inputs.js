import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const Inputs = React.forwardRef((defaultValue, ref) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      ref={ref}
    >
      <Input placeholder={defaultValue.text} />
    </Box>
  );
});

export default Inputs;
