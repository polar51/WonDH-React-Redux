import * as React from 'react';
import Button from '@mui/material/Button';

const BasicButtons = info => {
  const { text, handleBtn } = info;
  return (
    <Button variant="contained" onClick={handleBtn}>
      {text}
    </Button>
  );
};

export default BasicButtons;
