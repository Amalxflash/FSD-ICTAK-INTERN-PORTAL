import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import AdminForm from "./AdminForm";
import axiosInstance from "../axiosInterceptor";
import '../style/MentorDisplay.css'; // Import CSS file for styling

const MentorDisplay = () => {
  const [mentor, setMentor] = useState([]);
  const [up, setUp] = useState(false);
  const [singleVal, setSingleVal] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/mentors").then((res) => {
      setMentor(res.data);
    });

    axiosInstance.get("/api/project/topics").then((res) => {
      setTopics(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/api/remove/${id}`)
      .then((response) => {
        alert(response.data.message);
        setMentor((prevMentor) =>
          prevMentor.filter((mentor) => mentor._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const updateVal = (item) => {
    setUp(true);
    setSingleVal(item);
  };

  let FinalJSX = (
    <div className="mentor-display-container">
      <Typography
        variant="h4"
        className="mentor-display-heading"
      >
        MENTOR INFO
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Project Topic</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mentor.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{item.PhoneNumber}</TableCell>
                <TableCell>
                  {item.ProjectTopics.map((topic, index) => (
                    <div key={index}>{topic}</div>
                  ))}
                </TableCell>
                <TableCell>
                  <Button
                    className="update-button"
                    onClick={() => updateVal(item)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    className="delete-button"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  if (up)
    FinalJSX = <AdminForm method="put" data={singleVal} topics={topics} />;

  return FinalJSX;
};

export default MentorDisplay;