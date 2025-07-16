import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const WriterOrders = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'in-progress';

  return (
    <div>
      <Typography variant="h5" gutterBottom>My Orders</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="In progress" value="in-progress" component={Link} to="/my-orders/in-progress" />
        <Tab label="Completed" value="completed" component={Link} to="/my-orders/completed" />
        <Tab label="Canceled" value="canceled" component={Link} to="/my-orders/canceled" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content rendered by sub-routes */}
      </Box>
    </div>
  );
};

export default WriterOrders;