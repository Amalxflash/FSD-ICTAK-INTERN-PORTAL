import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Grid, Hidden, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/course.png'
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            {/* Logo */}
            <Grid item>
              <Link to="/">
                <img src={Logo} alt="Logo" style={{ height: 40, width: 'auto' }} />
              </Link>
            </Grid>
            {/* App Name */}
            <Grid item>
              <Typography variant="h6" component="div" style={{ color: 'white' }}>
                ICTAK INTERNSHIP PORTAL
              </Typography>
            </Grid>
            {/* Menu Button and Navigation Links (All Screens) */}
            <Grid item>
              <Box sx={{ display: 'flex' }}>
                <Hidden smUp>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={anchorEl ? 'menu-basic' : undefined}
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-basic"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'menu-basic',
                    }}
                  >
                    <MenuItem onClick={handleClose} component={Link} to="/" closeMenu={handleClose}>
                      Home
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/add" closeMenu={handleClose}>
                      Student Submissions
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/login" closeMenu={handleClose}>
                      Login
                    </MenuItem>
                  </Menu>
                </Hidden>
                <Hidden xsDown>
                  {/* Navigation Links displayed on Non-XS screens */}
                  <Button color="inherit" component={Link} to="/" sx={{ fontSize: '14px' }}>
                    Home
                  </Button>
                  <Button color="inherit" component={Link} to="/add" sx={{ fontSize: '14px' }}>
                    Student Submissions
                  </Button>
                  <Button color="inherit" component={Link} to="/login" sx={{ fontSize: '14px' }}>
                    Login
                  </Button>
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;