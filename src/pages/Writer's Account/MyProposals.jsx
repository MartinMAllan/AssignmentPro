import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const WriterProposals = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'open';

  return (
    <div>
      <Typography variant="h5" gutterBottom>My Proposals</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="Open" value="open" component={Link} to="/my-proposals/open" />
        <Tab label="Unconfirmed" value="unconfirmed" component={Link} to="/my-proposals/unconfirmed" />
        <Tab label="Declined" value="declined" component={Link} to="/my-proposals/declined" />
        <Tab label="Canceled" value="canceled" component={Link} to="/my-proposals/canceled" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content rendered by sub-routes */}
      </Box>
    </div>
  );
};

export default WriterProposals;