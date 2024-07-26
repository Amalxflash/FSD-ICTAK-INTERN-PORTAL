import React from 'react';
import { Container, Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import courseImage1 from '../images/course-1.jpeg';
import courseImage2 from '../images/course-2.webp';
import courseImage3 from '../images/course-3.webp';

const Course = () => {
  return (
    <>
      {/* Courses Start */}
      <Container maxWidth="xxl" py={5}>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <Typography variant="h6" component="h2" sx={{ bgcolor: '#06BBCC', color: 'white', py: 1, px: 3, borderRadius: '5px' }}>
            Courses
          </Typography>
          <Typography variant="h3" mt={3} mb={5}>Popular Courses</Typography>
        </div>
        <Grid container spacing={4} justifyContent="center">
          {[{ image: courseImage1, title: 'Certified Specialist in Data Science & Analytics', instructor: 'Mridula', duration: '10 Hrs', students: '60 Students' },
            { image: courseImage2, title: 'Certified Specialist in Software Testing', instructor: 'Tiya', duration: '11.49 Hrs', students: '60 Students' },
            { image: courseImage3, title: 'Certified Specialist in Full Stack Development (MERN)', instructor: 'John Doe', duration: '1.49 Hrs', students: '30 Students' }].map((course, index) => (
              <Grid key={index} item lg={4} md={6} xs={12}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
                  <CardMedia
                    component="img"
                    image={course.image}
                    alt={course.title}
                    sx={{ height:'300px', objectFit: 'cover' }} // Maintain image aspect ratio and fill the container
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#06BBCC' }}>{course.title}</Typography>
                    <Typography variant="body1" paragraph>Course Fee: 30,000 INR</Typography>
                    <Typography variant="body1" mb={4}>{course.title}</Typography>
                    <Box sx={{ display: 'flex', borderTop: '1px solid #ccc', p: 2 }}>
                      <Typography variant="body2" sx={{ flex: '1', borderRight: '1px solid #ccc', py: 2 }}>{course.instructor}</Typography>
                      <Typography variant="body2" sx={{ flex: '1', borderRight: '1px solid #ccc', py: 2 }}>{course.duration}</Typography>
                      <Typography variant="body2" sx={{ flex: '1', py: 2 }}>{course.students}</Typography>
                    </Box>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Button variant="contained" color="primary" size="small" href="#" sx={{ borderRadius: '30px' }}>Read More</Button>
                    <Button variant="contained" color="primary" size="small" href="#" sx={{ borderRadius: '30px' }}>Join Now</Button>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
      {/* Courses End */}
    </>
  );
}

export default Course;