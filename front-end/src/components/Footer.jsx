import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      {/* Footer Start */}
      <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white', py: 3 }} className="footer">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                <i className="fa fa-map-marker-alt me-1" />
                G1, Ground Floor, Thejaswini, Technopark Campus
              </Typography>
              <Typography variant="body1" gutterBottom>
                <i className="fa fa-phone-alt me-1" />
                Office: +91 471 270 0811
              </Typography>
              <Typography variant="body1" gutterBottom>
                <i className="fa fa-envelope me-1" />
                info@ictkerala.org
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
              <Typography variant="body2" gutterBottom>
                ©{" "}
                <Link href="#" underline="hover" color="inherit">
                  ICTAK
                </Link>
                , All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/* Footer End */}
    </footer>
  );
};

export default Footer;