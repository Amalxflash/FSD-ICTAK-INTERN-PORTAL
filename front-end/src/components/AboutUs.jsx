import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import aboutImage from '../images/about.jpg';

const AboutUs = () => {
  return (
    <>
    <div>
      {/* About Start */}
      <Container maxWidth="xl" py={6} sx={{ bgcolor: 'white' }}>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={aboutImage}
                alt="About ICTAK"
                sx={{ height:'400px', paddingTop: '' }} // 16:9 aspect ratio
              />
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card sx={{ bgcolor: 'white', color: '#06BBCC', height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#06BBCC' }}>
                  Welcome to ICTAK
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                  ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'black' }}>
                  "To emerge as the single-point establishment for all the ICT related capability building in the state."
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'Skilled Instructors',
                    'Online Classes',
                    'International Certificate',
                  ].map((item, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                      <Typography variant="body1" sx={{ color: 'black' }}>
                        <Box component="span" sx={{ mr: 1 }}>
                          <i className="fa fa-arrow-right" sx={{ color: '#06BBCC' }} />
                        </Box>
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* About End */}
      </div>
    </>
  );
}

export default AboutUs;