import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import MentorNavbar from "../components/MentorNavbar";
import { Button, Typography, TextField, MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../axiosInterceptor";

const SubmissionView = () => {
  const [student, setStudent] = useState(null);
  const { studentId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [evaluate, setEvaluate] = useState({
    Marks: "",
    Comments: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axiosInstance
      .get(`/api/student/submissions/${studentId}`)
      .then((response) => {
        setStudent(response.data);
        setEvaluate({
          Marks: response.data.Marks,
          Comments: response.data.Comments,
        });
        setIsCompleted(response.data.EvaluationStatus === "completed");
      })
      .catch((error) => {
        console.error("Error fetching mentor data:", error);
      });
  }, [studentId]);

  const handleChange = (e) => {
    setEvaluate({ ...evaluate, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Update the student object with the new marks and comments
    setStudent((prevStudent) => ({
      ...prevStudent,
      Marks: evaluate.Marks,
      Comments: evaluate.Comments,
      EvaluationStatus: "completed",
    }));

    const requestMethod = isCompleted ? "put" : "post";
    const requestUrl = isCompleted
      ? `/api/student/editmarks/${studentId}`
      : `/api/student/evaluation/${studentId}`;

    axiosInstance({
      method: requestMethod,
      url: requestUrl,
      data: { Marks: evaluate.Marks, Comments: evaluate.Comments },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Marks, comments, and evaluation status updated successfully:", response.data);
        setEvaluate({ Marks: "", Comments: "" });
        setIsCompleted(true);
        alert(response.data.message);
        // Navigate back to student list
        navigate('/submissions');
      })
      .catch((error) => {
        console.error("Error updating marks, comments, and evaluation status:", error);
      });
  };

  return (
    <>
      <MentorNavbar />
      <div
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
       <TableContainer
          component={Paper}
          style={{
            padding: "10px",
            border: "1px solid #e3e3cf",
            borderRadius: "5px",
            backgroundColor: "#e3e3cf",
            marginBottom: "20px",
          }}
        >
          <Table style={{ width: "100%" }}>
            <TableRow>
              <TableCell style={{ fontSize: "40px" }}></TableCell>
              <TableCell style={{ fontSize: "40px" }}></TableCell>
            </TableRow>
            <TableContainer
              component={Paper}
              style={{
                padding: "30px",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
                marginBottom: "20px",
                marginLeft: "40px",
              }}
            >
              <Table style={{ width: "100%" }}>
                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>Name:</TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.Name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>Batch:</TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.Batch}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>Email:</TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.Email}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>
                    Submission Link:
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.SubmissionLink}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>
                    Marks:
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.Marks}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "20px" }}>
                    Comments:
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }}>
                    {student?.Comments}
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Table>
        </TableContainer>
      </div>

      {isCompleted ? (
        <div style={{ margin: "auto", width: "70%" }}>
          <br />
          <Typography variant="h6">Edit Submission</Typography>
          <br />
          <TextField
  select
  label="Marks"
  name="Marks"
  value={evaluate.Marks}
  onChange={handleChange}
  variant="outlined"
  fullWidth
  style={{ marginBottom: "20px" }}
>
  {[...Array(11).keys()].map((num) => (
    <MenuItem key={num} value={num}>
      {num}
    </MenuItem>
  ))}
</TextField>
<TextField
  label="Comments"
  name="Comments"
  value={evaluate.Comments}
  onChange={handleChange}
  variant="outlined"
  fullWidth
  multiline
  rows={6}
  style={{ marginBottom: "20px" }}
/>
<Button variant="contained" color="primary" onClick={handleSubmit}>
  Update
</Button>
        </div>
      ) : (
        <div style={{ margin: "auto", width: "70%" }}>
          <br />
          <Typography variant="h6">Mark Submission</Typography>
          <br />
          <TextField
            select
            label="Marks"
            name="Marks"
            value={evaluate.Marks}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            style={{ marginBottom: "20px" }}
          >
            {[...Array(11).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Comments"
            name="Comments"
            value={evaluate.Comments}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            style={{ marginBottom: "20px" }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </>
  );
};

export default SubmissionView;