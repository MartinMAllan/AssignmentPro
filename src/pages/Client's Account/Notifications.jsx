import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <SettingsIcon />,
      description: 'Proposal Accepted! Your order proposal of $66.30 for order 9654163 - Global Health Project has been accepted by the customer. Good hunting!',
      link: '/orders/9654163',
      orderTitle: 'Global Health Project',
      timestamp: '10 minutes ago',
    },
    {
      id: 2,
      icon: <SettingsIcon />,
      description: 'New file(s) attached! Customer attached new file(s) to the order 9653971 - Assignment: Strategies and Results Section.',
      link: '/orders/9653971',
      orderTitle: 'Assignment: Strategies and Results Section',
      timestamp: 'an hour ago',
    },
    {
      id: 3,
      icon: <SettingsIcon />,
      description: 'New Comment from Customer: Customer 751319 added a new comment to order 9653971\'s description "Assignment: Strategies and Results Section".',
      link: '/orders/9653971',
      orderTitle: 'Assignment: Strategies and Results Section',
      timestamp: 'an hour ago',
    },
    {
      id: 4,
      icon: <SettingsIcon />,
      description: 'Order Canceled: The order 9653970 - Research Proposal has been canceled by the customer.',
      link: '/orders/9653970',
      orderTitle: 'Research Proposal',
      timestamp: '2 hours ago',
    },
    {
      id: 5,
      icon: <SettingsIcon />,
      description: 'Bid Rejected: Your bid for order 9653965 - Essay on Environmental Impact has been rejected.',
      link: '/orders/9653965',
      orderTitle: 'Essay on Environmental Impact',
      timestamp: '3 hours ago',
    },
    {
      id: 6,
      icon: <SettingsIcon />,
      description: 'Order Completed: Order 9653950 - Thesis Chapter Review has been marked as completed.',
      link: '/orders/9653950',
      orderTitle: 'Thesis Chapter Review',
      timestamp: '5 hours ago',
    },
    {
      id: 7,
      icon: <SettingsIcon />,
      description: 'Payment Made: An installment payment of $20.00 has been made for order 9653945 - Project Report.',
      link: '/orders/9653945',
      orderTitle: 'Project Report',
      timestamp: '1 day ago',
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications([]); // Simulates marking all as read by clearing the list; replace with API call in production
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">Notifications</Typography>
        <Button variant="text" color="primary" onClick={handleMarkAllRead}>
          Mark all as read
        </Button>
      </Box>
      <Paper elevation={1} sx={{ p: 2 }}>
        <List>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemText primary="You have no notifications" />
            </ListItem>
          ) : (
            notifications.map((notif) => (
              <ListItem key={notif.id}>
                <ListItemIcon>{notif.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <span>
                      {notif.description.split(notif.orderTitle)[0]}
                      <Link href={notif.link} underline="always" color="primary">
                        {notif.orderTitle}
                      </Link>
                      {notif.description.split(notif.orderTitle)[1]}
                    </span>
                  }
                  secondary={notif.timestamp}
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </div>
  );
};

export default Notifications;