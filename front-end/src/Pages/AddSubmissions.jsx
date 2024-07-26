import React, { useState } from "react";
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Container,
  Grid,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import Navbar from "../components/Navbar";
import axiosInstance from "../axiosInterceptor";

const AddSubmissions = () => {
  const navigate = useNavigate();

  const [submission, setSubmission] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: "",
  });

  const [alertMessages, setAlertMessages] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: "",
  });

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "Name":
        if (!value) {
          error = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name should only contain letters and spaces";
        }
        break;
      case "Batch":
        if (!value) {
          error = "Batch is required";
        }
        break;
      case "Email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "SubmissionLink":
        if (!value) {
          error = "Submission Link is required";
        } else if (
          !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            value
          )
        ) {
          error = "Invalid URL";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setSubmission({ ...submission, [name]: value });
    setAlertMessages({ ...alertMessages, [name]: error });
  };

  const addPost = () => {
    // Check if any field is empty
    const isAnyFieldEmpty = Object.values(submission).some((value) => !value);

    if (isAnyFieldEmpty) {
      // If any field is empty, display an alert message
      alert("Please fill all the required fields");
      return;
    }

    axiosInstance
      .post("/api/student/newsubmission", submission)
      .then((res) => {
        alert(res.data.message);
        navigate('/login'); // Navigate to the login page after successful submission
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div
        style={{
          margin: "0 auto",
          width: "50%",
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          padding: '32px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: 'black', height: '50px', borderRadius: '5px', paddingTop: '5px', textAlign:"center" }}>
          ADD STUDENT SUBMISSION
        </Typography>
        <br></br>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
                name="Name"
                value={submission.Name}
                onChange={inputHandler}
                error={!!alertMessages.Name}
                helperText={alertMessages.Name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Batch"
                variant="outlined"
                style={{ width: "100%" }}
                name="Batch"
                value={submission.Batch}
                onChange={inputHandler}
                error={!!alertMessages.Batch}
                helperText={alertMessages.Batch}
              >
                <MenuItem value="">Select Batch</MenuItem>
                <MenuItem value="KKEM March CSA">KKEM March CSA</MenuItem>
                <MenuItem value="KKEM March DSA">KKEM March DSA</MenuItem>
                <MenuItem value="KKEM March MLAI">KKEM March MLAI</MenuItem>
                <MenuItem value="KKEM March FSD">KKEM March FSD</MenuItem>
                <MenuItem value="KKEM March ST">KKEM March ST</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: "100%" }}
                name="Email"
                value={submission.Email}
                onChange={inputHandler}
                error={!!alertMessages.Email}
                helperText={alertMessages.Email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Submission Link"
                variant="outlined"
                style={{ width: "100%" }}
                name="SubmissionLink"
                value={submission.SubmissionLink}
                onChange={inputHandler}
                error={!!alertMessages.SubmissionLink}
                helperText={alertMessages.SubmissionLink}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
                onClick={addPost}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default AddSubmissions;
