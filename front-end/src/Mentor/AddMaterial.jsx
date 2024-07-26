import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
import axiosInstance from '../axiosInterceptor';

const AddMaterial = ({ addMaterial }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axiosInstance.post('/api/reference-material', { title, description, link })
      .then((res) => {
        addMaterial(res.data); 
        setOpen(false); 
        // Reset input fields
        setTitle('');
        setDescription('');
        setLink('');
      })
      .catch((error) => {
        console.error('Error adding reference material:', error);
      });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Material
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Material</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of the new material:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            margin="dense"
            label="Link"
            type="text"
            fullWidth
            value={link}
            onChange={handleLinkChange}
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

export default AddMaterial;