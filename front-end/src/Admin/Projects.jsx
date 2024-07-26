import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Grid, TextField } from '@mui/material';
import axiosInstance from '../axiosInterceptor';
import AddProject from './AddProject';
import AdminNavbar from '../components/AdminNavbar';
import '../style/Projects.css'
import Footer from '../components/Footer';

const Projects = () => {
  const [topics, setTopics] = useState([]);
  const [editedTopic, setEditedTopic] = useState('');
  const [editId, setEditId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosInstance.get('/api/project/topics')
      .then((res) => {
        setTopics(res.data);
      })
      .catch((error) => {
        console.error('Error fetching project topics:', error);
      });
  };

  const deleteTopic = (id) => {
    axiosInstance.delete(`/api/project/topics/${id}`)
      .then(() => {
        alert('Project topic deleted successfully');
        fetchData();
      })
      .catch((error) => {
        console.error('Error deleting project topic:', error);
      });
  };

  const handleEdit = (id, topic) => {
    setEditId(id);
    setEditedTopic(topic);
  };

  const cancelEdit = () => {
    setEditId('');
    setEditedTopic('');
  };

  const saveEdit = async () => {
    try {
      await axiosInstance.put(`/api/project/topics/${editId}`, { topic: editedTopic });
      alert('Project topic updated successfully');
      fetchData(); 
      cancelEdit(); 
    } catch (error) {
      console.error('Error updating project topic:', error);
    }
  };

  const addTopic = (newTopic) => {
    setTopics([...topics, newTopic]); 
  };

  return (
    <>
      <AdminNavbar />
      <AddProject addTopic={addTopic} />
      <div style={{ margin: '2%' }}>
        <Grid container spacing={2}>
          {topics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic._id}>
              <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#f5f5f5" }}>
                <CardContent>
                  {editId === topic._id ? (
                    <TextField
                      fullWidth
                      value={editedTopic}
                      onChange={(e) => setEditedTopic(e.target.value)}
                    />
                  ) : (
                    <Typography variant='h5' component='div'>
                      {topic.topic}
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  {editId === topic._id ? (
                    <>
                      <Button size='small' onClick={cancelEdit}>
                        Cancel
                      </Button>
                      <Button size='small' onClick={saveEdit}>
                        Save
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size='small' onClick={() => handleEdit(topic._id, topic.topic)}>
                        Edit
                      </Button>
                      <Button
                        size='small'
                        variant='contained'
                        color='secondary'
                        onClick={() => deleteTopic(topic._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
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

export default Projects;