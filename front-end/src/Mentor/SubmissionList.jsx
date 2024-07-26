import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";
import MentorNavbar from "../components/MentorNavbar";
import axiosInstance from "../axiosInterceptor";

const SubmissionList = () => {
  const [sub, setSubmission] = useState([]);
  const [searchBatch, setSearchBatch] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/api/student/submissions")
      .then((res) => {
        setSubmission(res.data);
      })
      .catch((error) => {
        console.error("Error fetching submissions:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchBatch(event.target.value);
  };

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/api/student/removesubmission/${id}`)
      .then((response) => {
        alert(response.data.message);
        setSubmission((prevSubmission) =>
          prevSubmission.filter((sub) => sub._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const filteredSubmissions = sub.filter(submission =>
    submission.Batch && submission.Batch.toLowerCase().includes(searchBatch.toLowerCase())
  );

  // Default filter options
  const defaultFilterOptions = [
    "KKEM March CSA",
    "KKEM March DSA",
    "KKEM March MLAI",
    "KKEM March FSD",
    "KKEM March ST",
  ];

  return (
    <>
      <MentorNavbar />
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ flexGrow: 1 }}>
          <TextField
            label="Search by Batch"
            variant="outlined"
            value={searchBatch}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <InputLabel id="filter-label">Filter</InputLabel>
          <Select
            labelId="filter-label"
            value={searchBatch}
            onChange={(e) => setSearchBatch(e.target.value)}
            variant="outlined"
            style={{width:"200px"}}
          >
            <MenuItem value="">All</MenuItem>
            {defaultFilterOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Serial Number
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Name
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Batch
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Email
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Evaluation Status
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Actions
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSubmissions.map((item, index) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "inherit",
                }}
                key={index}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Batch}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{item.SubmissionLink}</TableCell>
                <TableCell>{item.EvaluationStatus}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/viewsubmissions/${item._id}`}
                  >
                    {item.EvaluationStatus === "completed"
                      ? "VIEW"
                      : "EVALUATE"}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    // color="secondary"
                    onClick={() => handleDelete(item._id)}
                    style={{ backgroundColor: "blue", color: "black" }}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubmissionList;