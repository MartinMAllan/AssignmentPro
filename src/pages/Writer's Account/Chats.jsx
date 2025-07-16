import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const WriterChats = () => {
  const location = useLocation();
  const tabValue = location.pathname.split('/').pop() || 'active';

  return (
    <div>
      <Typography variant="h5" gutterBottom>Chats</Typography>
      <Tabs value={tabValue} indicatorColor="primary" textColor="primary">
        <Tab label="Active" value="active" component={Link} to="/chats/active" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {/* Content rendered by sub-routes */}
      </Box>
    </div>
  );
};

export default WriterChats;