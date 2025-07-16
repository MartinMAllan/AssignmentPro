import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Transactions = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'transactions'; // Determine active tab from URL

  return (
    <div>
      <Typography variant="h5" gutterBottom>My balance: $0.00</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="Transactions" value="transactions" component={Link} to="/transactions/transactions" />
        <Tab label="Refund requests" value="refund" component={Link} to="/transactions/refund" />
        <Tab label="Payment methods" value="payment" component={Link} to="/transactions/payment" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content will be rendered by sub-routes via Outlet */}
      </Box>
    </div>
  );
};

export default Transactions;