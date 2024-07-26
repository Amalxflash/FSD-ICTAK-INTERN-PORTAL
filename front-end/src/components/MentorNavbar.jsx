import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Hidden } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../AuthContext';

const MentorNavbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#06BBCC' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item>
            <Typography variant="h6" style={{ color: 'white' }}>
              <i className="fa fa-book me-3" />
              ICTAK-Mentor Dashboard
            </Typography>
          </Grid>
          {/* Navigation Links & Logout Button */}
          <Grid item>
            <Hidden lgUp>
              < Button color="inherit" component={Link} to="/mentor/:id" className="nav-item nav-link">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/reference-material" className="nav-item nav-link">
                Reference Material
              </Button>
            </Hidden>
            <Hidden mdDown>
              <Button color="inherit" component={Link} to="/mentor/:id" className="nav-item nav-link">
                Home
              </Button> 
              <Button color="inherit" component={Link} to="/reference-material" className="nav-item nav-link">
                Reference Material
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

export default MentorNavbar;