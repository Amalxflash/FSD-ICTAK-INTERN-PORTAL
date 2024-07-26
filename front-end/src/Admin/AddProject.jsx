import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
import axiosInstance from '../axiosInterceptor';

const AddProject = ({ addTopic }) => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axiosInstance.post('/api/project/topics', { topic })
      .then((res) => {
        addTopic(res.data); 
        setOpen(false); 
      })
      .catch((error) => {
        console.error('Error adding project topic:', error);
      });
  };

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the new project:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            fullWidth
            value={topic}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProject;