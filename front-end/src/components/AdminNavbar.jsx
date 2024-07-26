import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Hidden } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const AdminNavbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item>
            <Typography variant="h6" style={{ color: 'white' }}>
              <i className="fa fa-book me-3" />
              ADMIN-Dashboard
            </Typography>
          </Grid>
          {/* Navigation Links & Logout Button */}
          <Grid item>
            <Hidden lgUp>
              <Button color="inherit" component={Link} to="/admin" className="nav-item nav-link">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/addmentor" className="nav-item nav-link">
                Mentor Form
              </Button>
              <Button color="inherit" component={Link} to="/mentors" className="nav-item nav-link">
                Mentors
              </Button>
              <Button color="inherit" component={Link} to="/project" className="nav-item nav-link">
                Projects
              </Button>
              
            </Hidden>
            <Hidden mdDown>
              <Button color="inherit" component={Link} to="/admin" className="nav-item nav-link">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/addmentor" className="nav-item nav-link">
                Mentor Form
              </Button>
              <Button color="inherit" component={Link} to="/mentors" className="nav-item nav-link">
                Mentors
              </Button>
              <Button color="inherit" component={Link} to="/project" className="nav-item nav-link">
                Projects
              </Button>
              
              <Button color="inherit" component={Link} onClick={handleLogout} to="/login">
                Logout
                <i className="fa fa-arrow-right ms-3" />
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNavbar;