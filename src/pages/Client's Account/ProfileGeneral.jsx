import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ProfileGeneral = () => {
  return (
    <div>
      <Typography variant="subtitle1">Nickname</Typography>
      <TextField fullWidth value="2095833" sx={{ mb: 2 }} disabled />
      <Typography variant="subtitle1">Account</Typography>
      <TextField fullWidth value="Client Otwovon" sx={{ mb: 2 }} disabled />
      <Typography variant="subtitle1">First name</Typography>
      <TextField fullWidth value="Client" sx={{ mb: 2 }} disabled />
      <Typography variant="subtitle1">Last name</Typography>
      <TextField fullWidth value="Otwovon" sx={{ mb: 2 }} disabled />
      <Typography variant="subtitle1">Date of birth</Typography>
      <TextField fullWidth type="date" sx={{ mb: 2 }} disabled />
      <Typography variant="subtitle1">Time format</Typography>
      <Button variant="contained" color="primary" disabled>12 hours</Button>
      <Button variant="outlined" color="primary" sx={{ ml: 2 }} disabled>24 hours</Button>
    </div>
  );
};

export default ProfileGeneral;