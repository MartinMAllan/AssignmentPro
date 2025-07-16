import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AvailableOrders = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'all';

  return (
    <div>
      <Typography variant="h5" gutterBottom>Available Orders</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="All" value="all" component={Link} to="/available-orders/all" />
        <Tab label="Invited" value="invited" component={Link} to="/available-orders/invited" />
        <Tab label="Hidden" value="hidden" component={Link} to="/available-orders/hidden" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content rendered by sub-routes */}
      </Box>
    </div>
  );
};

export default AvailableOrders;