import React from 'react';
import Sidebar from './components/Sidebar';
import { AppBar, InputAdornment, Toolbar, Typography, Box, Button, Checkbox, FormControlLabel, TextField, Container, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Search, Notifications, Person } from '@mui/icons-material';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#7731e4' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            buyerfolio
          </Typography>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            style={{ backgroundColor: 'white', borderRadius: '20px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />

          <IconButton color="inherit" style={{ marginLeft: '10px' }}>
            <Notifications />
          </IconButton>

          <IconButton color="inherit" style={{ marginLeft: '10px' }}>
            <Avatar src="#" alt="User Avatar" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Sidebar />

        <Container alignItems="center" >
          <Typography variant="h4" style={{marginTop: '20px'}}>Please enter your details</Typography>
          
          <form noValidate autoComplete="off" style={{marginTop: '20px'}}>
            <div>
              <TextField label="First Name" variant="outlined" style={{marginRight: '20px'}} />
              <TextField label="Last Name" variant="outlined" />
            </div>
            <div style={{marginTop: '20px'}}>
              <TextField label="Phone Number" variant="outlined" style={{marginRight: '20px'}} />
              <TextField label="Email" variant="outlined" />
            </div>
            <div style={{marginTop: '20px'}}>
              <FormControlLabel
                control={<Checkbox />}
                label="Canadian Resident or Citizen"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Non-resident or citizen"
              />
            </div>
            <div style={{marginTop: '20px'}}>
              <Typography variant="h6">Co-Buyer</Typography>
              <Typography>Having a co-buyer could increase your budget. A co-buyer is any person who will be living in your home with you and is over 18 years old.</Typography>
            </div>
            <div style={{marginTop: '20px'}}>
              <Button variant="contained" color="primary">Add</Button>
            </div>
            <div style={{marginTop: '20px'}}>
              <FormControlLabel
                control={<Checkbox />}
                label="By entering my email, I agree to receive promotional emails from Buyer Folio. I can unsubscribe any time."
              />
            </div>
            <div style={{marginTop: '20px'}}>
              <Button variant="contained" color="primary" size="large">Next</Button>
            </div>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default App;


