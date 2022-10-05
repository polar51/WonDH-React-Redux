import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
// import { useDispatch } from 'react-redux/es/exports';
// import { login } from '../../store/slice/config-slice';

const BasicButtons = React.forwardRef((info, ref, event) => {
  // const dispatch = useDispatch();

  // 이 버튼은 dispatch를 빼고 단순한 버튼으로서의 역할만 하는 것으로
  return (
    <Box>
      <Button variant="contained" ref={ref} onClick={event}>
        {info.text}
      </Button>
    </Box>
  );
});

export default BasicButtons;
