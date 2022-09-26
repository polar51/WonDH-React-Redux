import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Inputs from '../components/input/Inputs';
import SubmitButton from '../components/buttons/SubmitButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Index = () => {
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
