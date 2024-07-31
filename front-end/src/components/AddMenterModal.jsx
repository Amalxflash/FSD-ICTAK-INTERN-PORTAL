import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axiosInstance from '../axiosInterceptor';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
   
 };

export default function AddMenterModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if(props?.method !== "put"){
      setOpen(false)
    }else{
      props.hide()
    }
  };

  const navigate = useNavigate();



 

  const [mentor, setMentor] = React.useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ProjectTopics: [],
  });

  const [alertMessages, setAlertMessages] = React.useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ProjectTopics: "",
  });

  React.useEffect(() => {
    if (props.method === "put" && props.data) {
      setMentor(props.data);
    }
  }, [props.data, props.method]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "ProjectTopics") {
      setMentor((prevMentor) => ({
        ...prevMentor,
        ProjectTopics: typeof value === "string" ? value.split(",") : value,
      }));
    } else {
      setMentor({ ...mentor, [name]: value });
    }
    setAlertMessages({ ...alertMessages, [name]: "" });
  };

  const addPost = () => {
    const newAlertMessages = {};

    if (!mentor.Name.trim()) {
      newAlertMessages.Name = 'Name is required';
    }

    if (!mentor.Email.trim()) {
      newAlertMessages.Email = 'Email is required';
    }

    if (!mentor.PhoneNumber || !/^[0-9]{10}$/.test(mentor.PhoneNumber)) {
      newAlertMessages.PhoneNumber = 'Phone Number is required and should be a valid phone number';
    }

    if (!mentor.Password.trim()) {
      newAlertMessages.Password = 'Password is required';
    } else if (mentor.Password.trim().length < 8) {
      newAlertMessages.Password = 'Password should be at least 8 characters long';
    }

    if (!mentor.ProjectTopics || mentor.ProjectTopics.length === 0) {
      newAlertMessages.ProjectTopics = 'At least one Project Topic is required';
    }

    setAlertMessages(newAlertMessages);

    if (Object.keys(newAlertMessages).length > 0) {
      return;
    }

    if (props.method === "post") {
      axiosInstance
        .post('/api/addmentor', mentor)
        .then((res) => {
          alert(res.data.message);
          window.location.reload()
          setOpen(false)
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (props.method === "put") {
      axiosInstance
        .put("/api/mentors/" + mentor._id, mentor)
        .then((res) => {
          alert(res.data.message);
          props.hide();
          props.updateArray(mentor)
          // window.location.reload(); // Refresh the page after update
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  return (
    <div>
      <div style={{ display:"flex",width:"100%",justifyContent:"end" }}>
       {props?.method !== "put" && <Button variant="contained" onClick={handleOpen}>
          Add Mentor
        </Button>}
      </div>
      <Modal
        open={props?.method !== "put" ? open : true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="admin-form-container"style={{ marginBottom:'60px', marginTop:"60px", width:"100%" }}>
      <Typography variant="h4" gutterBottom className="form-heading">
        {props.method === "post" ? "ADD MENTOR" : "UPDATE MENTOR"}
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              className="form-field"
              name="Name"
              value={mentor.Name}
              onChange={inputHandler}
              error={!!alertMessages.Name}
              helperText={alertMessages.Name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              className="form-field"
              name="Email"
              value={mentor.Email}
              onChange={inputHandler}
              error={!!alertMessages.Email}
              helperText={alertMessages.Email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              className="form-field"
              name="PhoneNumber"
              value={mentor.PhoneNumber}
              onChange={inputHandler}
              error={!!alertMessages.PhoneNumber}
              helperText={alertMessages.PhoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              className="form-field"
              name="Password"
              type="password"
              value={mentor.Password}
              onChange={inputHandler}
              error={!!alertMessages.Password}
              helperText={alertMessages.Password}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className="form-field">
              <InputLabel id="demo-simple-select-label">Project Topics</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                multiple
                value={mentor.ProjectTopics}
                onChange={inputHandler}
                name="ProjectTopics"
                error={!!alertMessages.ProjectTopics}
                renderValue={(selected) => selected.join(', ')}
              >
                {props.topics && props.topics.map((topic) => (
                  <MenuItem
                    key={topic._id}
                    value={topic.topic}
                    selected={mentor.ProjectTopics.includes(topic.topic)}
                  >
                    {topic.topic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className="submit-button-container">
            <Button
              type="button"
              variant="contained"
              color="primary"
              className="submit-button"
              onClick={addPost}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
        </Box>
      </Modal>
    </div>
  );
}
