import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const WriterOrdersInProgress = () => {
  return (
    <div>
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#F0F4F8' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img src="https://img.icons8.com/ios/100/000000/empty-folder.png" alt="Empty" style={{ width: 100, opacity: 0.5 }} />
        </Box>
        <Typography variant="h6" color="textSecondary">You have no orders in progress</Typography>
      </Paper>
    </div>
  );
};

export default WriterOrdersInProgress;