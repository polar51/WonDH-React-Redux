import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import SubmitButton from '../components/buttons/SubmitButton';
import Inputs from '../components/input/Inputs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Index = () => {
  // Input의 value 값 submit으로 넘겨주기
  // redux action도 여기서 일어나야할듯
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Inputs text="이름" />
            </Item>
            <Grid item xs={12}>
              <Item>
                <Inputs text="아이디" />
              </Item>
            </Grid>
            <Grid item>
              <Item>
                <SubmitButton />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
