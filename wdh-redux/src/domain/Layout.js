import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Layout = () => {
  const profile = useSelector(state => state.profile.value);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item>
            <h1>Profile</h1>
            <h2>Name: {profile.name}</h2>
            <p>Id: {profile.id}</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
