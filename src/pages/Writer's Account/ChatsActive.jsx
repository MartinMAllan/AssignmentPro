import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const WriterChatsActive = () => {
  return (
    <div>
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#F0F4F8' }}>
        <Typography variant="h6" color="textSecondary">You have no active chats</Typography>
      </Paper>
    </div>
  );
};

export default WriterChatsActive;