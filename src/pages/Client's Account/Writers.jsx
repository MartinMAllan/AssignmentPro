import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Writers = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'all'; // Determine active tab from URL

  return (
    <div>
      <Typography variant="h5" gutterBottom>Writers</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="All writers" value="all" component={Link} to="/writers/all" />
        <Tab label="My writers" value="my" component={Link} to="/writers/my" />
        <Tab label="Blocked writers" value="blocked" component={Link} to="/writers/blocked" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content will be rendered by sub-routes via Outlet */}
      </Box>
    </div>
  );
};

export default Writers;