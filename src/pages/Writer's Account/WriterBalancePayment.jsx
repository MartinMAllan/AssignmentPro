import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const WriterBalancePayment = () => {
  return (
    <div>
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#F0F4F8' }}>
        <Typography variant="h6" color="textSecondary">No payment methods</Typography>
      </Paper>
    </div>
  );
};

export default WriterBalancePayment;