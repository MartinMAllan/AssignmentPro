import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DashboardHome = () => {
  const { user = { name: 'Floyce M.' } } = useContext(UserContext);

  return (
    <div>
      <Typography variant="h5" gutterBottom>Welcome, {user.name}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm= {6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1">Total Orders</Typography>
            <Typography variant="h4">128</Typography>
          </Paper>
        </Grid>
        <Grid item xs= {12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1">Active Orders</Typography>
            <Typography variant="h4">36</Typography>
          </Paper>
        </Grid>
        <Grid item xs= {12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1">Completed</Typography>
            <Typography variant="h4">92</Typography>
          </Paper>
        </Grid>
        <Grid item xs= {12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1">Pending Bids</Typography>
            <Typography variant="h4">11</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;