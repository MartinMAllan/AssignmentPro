import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; // Added for navigation

function Topbar({ userName, notificationsCount }) {
  const { user, setRole } = useContext(UserContext);
  const navigate = useNavigate(); // Hook for navigation

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    navigate('/'); // Navigate to root to trigger route reload for new role
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Avatar sx={{ mr: 2 }} src="/path/to/avatar.jpg" /> {/* Replace with actual path */}
      <Typography variant="body1" sx={{ flexGrow: 1 }}>{userName}</Typography>
      <Badge badgeContent={notificationsCount} color="primary" sx={{ mr: 2 }}>
        <NotificationsIcon />
      </Badge>
      <InputBase
        placeholder="Search by Order ID"
        sx={{ backgroundColor: '#F0F0F0', borderRadius: 4, p: 1, width: 200 }}
        endAdornment={<SearchIcon />}
      />
      <Select
        value={user.role || 'client'} // Default to client if role is undefined
        onChange={handleRoleChange}
        sx={{ ml: 2, minWidth: 120 }}
        variant="outlined"
      >
        <MenuItem value="client">Client</MenuItem>
        <MenuItem value="writer">Writer</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </Select>
    </div>
  );
}

export default Topbar;