import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import axiosInstance from '../axiosInterceptor';
import AddMaterial from './AddMaterial';
import MentorNavbar from '../components/MentorNavbar';
import Footer from '../components/Footer';

const ReferenceMaterial = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    axiosInstance.get('/api/reference-material')
      .then((res) => {
        setMaterials(res.data);
      })
      .catch((error) => {
        console.error('Error fetching reference materials:', error);
      });
  };

  const deleteMaterial = (id) => {
    axiosInstance.delete(`/api/reference-material/${id}`)
      .then(() => {
        alert('Reference material deleted successfully');
        fetchMaterials();
      })
      .catch((error) => {
        console.error('Error deleting reference material:', error);
      });
  };

  const addMaterial = (newMaterial) => {
    setMaterials([...materials, newMaterial]); 
  };

  return (
    <>
      <MentorNavbar/>
      <AddMaterial addMaterial={addMaterial} />
      <div style={{ margin: '7%' }}>
        <Grid container spacing={2}>
          {materials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material._id}>
              <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#f5f5f5"}} >
                <CardContent>
                  <Typography variant='h5' component='div'>
                    {material.title}
                  </Typography>
                  <Typography variant='body1'>
                    {material.description}
                  </Typography>
                  <Typography variant='body2'>
                    Link: {material.link}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={() => deleteMaterial(material._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer/>
    </>
  );
};

export default ReferenceMaterial;