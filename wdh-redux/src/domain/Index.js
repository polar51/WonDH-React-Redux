import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/slice/config-slice';
import BasicButtons from '../components/buttons/basicButton';
import Input from '../components/input/Input';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Index = () => {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  const getValues = e => {
    setValue({
      [e.target.name]: e.target.value,
    });
  };
  const saveRedux = () => {
    dispatch(login(value));
  };

  const resetRedux = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Item>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <Input text="name" value={value} getValues={getValues} />
              <Input text="id" value={value} getValues={getValues} />
              <BasicButtons text="Save" handleBtn={saveRedux} />
              <BasicButtons text="reset" handleBtn={resetRedux} />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
