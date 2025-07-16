import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import HelpCenter from '../components/HelpCenter.jsx';
import { UserContext } from '../context/UserContext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DashboardLayout() {
  const { user, notifications } = useContext(UserContext);
  const [helpOpen, setHelpOpen] = useState(false);
  const role = user.role || 'client';
  const welcomeMessage = role === 'client' ? 'Welcome, Client!' : role === 'writer' ? 'Welcome, Writer!' : 'Welcome, Admin!';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#E0F7FA', color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Topbar notificationsCount={notifications} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            top: 64, // Offset for AppBar
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Sidebar notificationsCount={notifications} onHelpClick={() => setHelpOpen(true)} />
      </Drawer>
      <main style={{ flexGrow: 1, paddingTop: '64px', padding: '16px', backgroundColor: '#F0F4F8', overflow: 'auto' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" gutterBottom>{welcomeMessage}</Typography>
        </Box>
        <Outlet />
      </main>
      <HelpCenter open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}

export default DashboardLayout;