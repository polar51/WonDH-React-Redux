import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports';
import { login } from '../../store/slice/config-slice';

export default function BasicButtons(inputName, inputId) {
  const dispatch = useDispatch();

  // 이 버튼은 dispatch를 빼고 단순한 버튼으로서의 역할만 하는 것으로
  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(login({ name: inputName, id: inputId }));
        }}
      >
        제출하기
      </Button>
    </Box>
  );
}
