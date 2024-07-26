import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material'; // Import necessary components from Material-UI
import RightImage from '../images/homeimage.png'; // Import your right side image

const CarouselIct = () => {
  return (
    <Grid container spacing={2}>
      {/* Left Section */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '10px', marginTop:'90px', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s', backgroundColor: '#90CAF9', color: 'white' }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Build your Career with ICTAK
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'justify' }}>
              ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'justify' }}>
              ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'justify' }}>
              ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Right Section */}
      <Grid item xs={12} md={6}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <img src={RightImage} alt="Right Side Image" style={{ maxWidth: '100%' }} />
        </div>
      </Grid>
      {/* Additional Content */}
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h4" gutterBottom style={{ color: '#90CAF9' }}>
            ICTAK Offline Programs: Back to physical sessions
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: 'black', textAlign: 'justify' }}>
            Tired of constant screen time? It's time for a change. Embrace the opportunity to engage in face-to-face sessions at our conveniently located centers within Kerala's prominent IT parks. The ICT Academy of Kerala is thrilled to announce the launch of Offline Programs. Led by industry experts and our subject specialists, these sessions promise to invigorate your career journey. Join us now to become a Certified Specialist in Data Science & Analytics, a Certified Cybersecurity Analyst, or a Certified Specialist in Software Testing. Applications for the May batches are now open! The program spans ~3 months (375 Hrs.) with 125 Hrs. internship. Eligible candidates include engineering/science graduates or three-year diploma holders in any engineering branch, possessing foundational knowledge in Mathematics and Computer fundamentals. Enroll now for just 30,000 INR +18% GST and take advantage of a 70% scholarship from KKEM or a 40% scholarship and 15% cashback from ICTAK. Classes will be conducted at various locations, including the ICTAK Headquarters at Thejaswini Building, Technopark, Thiruvananthapuram, and the ICTAK Regional Centre at Infopark Campus, Koratty.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" style={{ color:'black', marginTop: '20px', transition: 'transform 0.3s', backgroundColor: '#90CAF9', color: 'white', ':hover': { transform: 'scale(1.05)' } }}>Enroll Now</Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default CarouselIct;
