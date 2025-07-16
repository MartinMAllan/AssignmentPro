import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Profile = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'general'; // Determine active tab from URL

  return (
    <div>
      <Typography variant="h5" gutterBottom>Account settings</Typography>
      <Button variant="outlined" color="secondary" sx={{ mb: 2, float: 'right' }}>Log out</Button>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="General" value="general" component={Link} to="/profile/general" />
        <Tab label="Sign In & Security" value="security" component={Link} to="/profile/security" />
        <Tab label="Notification settings" value="notifications" component={Link} to="/profile/notifications" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content will be rendered by sub-routes via Outlet */}
      </Box>
    </div>
  );
};

export default Profile;