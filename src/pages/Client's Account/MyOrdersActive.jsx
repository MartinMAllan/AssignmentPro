import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

const MyOrdersActive = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Select value="Deadline, latest" variant="outlined" size="small" sx={{ minWidth: 200 }} disabled>
          <MenuItem value="Deadline, latest">Deadline, latest</MenuItem>
        </Select>
        <InputBase
          placeholder="Search"
          endAdornment={<SearchIcon />}
          sx={{ backgroundColor: '#F0F4F8', borderRadius: 4, p: 1, width: 200 }}
          disabled
        />
      </Box>
      <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#F0F4F8' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img src="https://img.icons8.com/ios/100/000000/empty-folder.png" alt="Empty" style={{ width: 100, opacity: 0.5 }} />
        </Box>
        <Typography variant="h6" color="textSecondary">You have no active orders</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>New order +</Button>
      </Paper>
    </div>
  );
};

export default MyOrdersActive;