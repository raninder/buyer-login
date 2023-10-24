import React from 'react';
import CustomAppBar from './CustomAppBar.js';
import Sidebar from './Sidebar.js';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <CustomAppBar />
      <Box display="flex">
          <Sidebar />
          {children}
      </Box>
      
    </div>
  );
};

export default Layout;
