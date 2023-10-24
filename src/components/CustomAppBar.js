import React from 'react';
import { AppBar, InputAdornment, Toolbar, TextField, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Search, ArrowDropDown, Notifications } from '@mui/icons-material';

function CustomAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#7731e4' }}>
            <Toolbar>
                <img src="/images/logo.png" alt="buyerfolio" style={{ height: '40px', marginRight: '20px' }} />
                <div style={{ flexGrow: 1 }}></div>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    style={{ backgroundColor: 'white', borderRadius: '20px', width: '250px' }}
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
                <IconButton color="inherit" style={{ marginLeft: '10px' }} onClick={handleMenuOpen}>
                    <Avatar src="/images/User_icon.png" alt="User Avatar" />
                </IconButton>
                <IconButton color="inherit" style={{ marginLeft: '-10px' }} onClick={handleMenuOpen}>
                    <ArrowDropDown />
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
    );
}

export default CustomAppBar;
