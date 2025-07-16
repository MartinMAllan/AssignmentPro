import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Chats = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'active'; // Determine active tab from URL

  return (
    <div>
      <Typography variant="h5" gutterBottom>Conversations</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="Active" value="active" component={Link} to="/chats/active" />
        {/* Add more tabs as per screenshots if needed */}
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content will be rendered by sub-routes via Outlet */}
      </Box>
    </div>
  );
};

export default Chats;