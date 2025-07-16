import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Sidebar({ notificationsCount, onHelpClick }) {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const role = user.role || 'client';

  let menuItems = [];

  if (role === 'client') {
    menuItems = [
      { path: '/my-orders', label: 'My Orders', icon: <FolderIcon /> },
      { path: '/writers', label: 'Writers', icon: <PeopleIcon /> },
      { path: '/chats', label: 'Chats', icon: <ChatIcon /> },
      { path: '/transactions', label: 'Transactions', icon: <AccountBalanceWalletIcon /> },
      { path: '/notifications', label: 'Notifications', icon: <NotificationsIcon /> },
      { path: '/help', label: 'Help Center', icon: <HelpIcon />, onClick: onHelpClick },
      { path: '/profile', label: 'My Profile', icon: <Avatar /> },
    ];
  } else if (role === 'writer') {
    menuItems = [
      { path: '/my-orders', label: 'My Orders', icon: <FolderIcon /> },
      { path: '/available-orders', label: 'Available orders', icon: <AssignmentIcon /> },
      { path: '/my-proposals', label: 'My proposals', icon: <AssignmentIcon /> },
      { path: '/chats', label: 'Chats', icon: <ChatIcon /> },
      { path: '/statistics', label: 'Statistics', icon: <BarChartIcon /> },
      { path: '/leaderboard', label: 'Leaderboard', icon: <LeaderboardIcon /> },
      { path: '/balance', label: 'Balance', icon: <AccountBalanceWalletIcon /> },
      { path: '/notifications', label: 'Notifications', icon: <NotificationsIcon /> },
      { path: '/help', label: 'Help Center', icon: <HelpIcon />, onClick: onHelpClick },
      { path: '/profile', label: 'My Profile', icon: <Avatar /> },
    ];
  } else if (role === 'admin') {
    menuItems = [
      { path: '/admin-dashboard', label: 'Admin Dashboard', icon: <BarChartIcon /> },
      // Add admin-specific items as needed
    ];
  }

  return (
    <List sx={{ mt: 8 }}>
      {menuItems.map((item) => (
        <ListItem button key={item.path} component={item.path ? Link : 'button'} to={item.path} selected={location.pathname === item.path} onClick={item.onClick}>
          <ListItemIcon>
            {item.label === 'Notifications' ? (
              <Badge badgeContent={notificationsCount} color="primary">
                {item.icon}
              </Badge>
            ) : (
              item.icon
            )}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;