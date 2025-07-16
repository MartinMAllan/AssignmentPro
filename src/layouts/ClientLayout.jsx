import React from 'react';
import Sidebar from '../components/Sidebar';

const ClientLayout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ marginLeft: '260px', padding: '20px' }}>{children}</div>
  </div>
);

export default ClientLayout;
