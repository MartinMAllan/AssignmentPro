import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const WriterBalanceTransactions = () => {
  return (
    <div>
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#F0F4F8' }}>
        <Typography variant="h6" color="textSecondary">No transactions</Typography>
      </Paper>
    </div>
  );
};

export default WriterBalanceTransactions;