import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WriterBalance = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'transactions';

  return (
    <div>
      <Typography variant="h5" gutterBottom>My Balance: $0.00</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>Withdraw</Button>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="Transactions" value="transactions" component={Link} to="/balance/transactions" />
        <Tab label="Withdrawal requests" value="withdrawal" component={Link} to="/balance/withdrawal" />
        <Tab label="Payment methods" value="payment" component={Link} to="/balance/payment" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content rendered by sub-routes */}
      </Box>
    </div>
  );
};

export default WriterBalance;