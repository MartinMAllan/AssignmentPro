import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const MyOrders = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Empty state for new account
  const orders = []; // Replace with API data later

  return (
    <div>
      <Typography variant="h5" gutterBottom>My Orders</Typography>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="In progress (0)" />
        <Tab label="Completed" />
        <Tab label="Canceled" />
      </Tabs>
      <Paper sx={{ mt: 2 }}>
        {orders.length === 0 ? (
          <Typography sx={{ p: 2 }}>You have no active orders</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Time Left</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    </div>
  );
};

export default MyOrders;