import React, { useState, useEffect } from "react";
import MentorNavbar from "../components/MentorNavbar";
import axiosInstance from "../axiosInterceptor";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Button, Typography, Table, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import Footer from "../components/Footer";

const MentorDashboard = () => {
  const [mentor, setMentor] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // Fetch all details of the mentor
    axiosInstance
      .get(`/api/mentors/${id}`)
      .then((response) => {
        setMentor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentor data:", error);
      });
  }, [id]);

  return (
    <>
      <MentorNavbar />
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", flexDirection: "column", padding: "0 20px" }}>
        <div style={{ borderRadius: "5px", backgroundColor: "white", padding: "20px" }}>
          <TableContainer component={Paper} style={{ padding: "10px", border: "1px solid #e3e3cf", borderRadius: "5px", backgroundColor: "#e3e3cf", marginBottom: "20px" }}>
            <Table>
              <TableRow>
                <TableCell style={{ fontSize: "50px" }}>Welcome, {mentor?.Name} !!!</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} style={{ padding: "10px", border: "1px solid #e3e3cf", borderRadius: "5px", backgroundColor: "#e3e3cf", marginBottom: "20px" }}>
            <Table>
              <TableRow>
                <TableCell style={{ fontSize: "40px" }}>Profile</TableCell>
              </TableRow>
              <TableContainer component={Paper} style={{ padding: "10px", border: "1px solid #06bccc", borderRadius: "5px", backgroundColor: "#06bccc", marginBottom: "20px" }}>
                <Table>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Name:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>{mentor?.Name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Email:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>{mentor?.Email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Phone Number:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>{mentor?.PhoneNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Allotted Projects:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      <Button
                        style={{ backgroundColor: "white", color: "black" }}
                        onClick={() => setShowProjects(!showProjects)}
                      >
                        {showProjects ? "HIDE" : "SHOW"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            </Table>
          </TableContainer>
        </div>
        {showProjects && mentor && mentor.ProjectTopics.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" style={{ marginBottom: "20px" }}>Allotted Projects</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {mentor.ProjectTopics.map((project, index) => (
                <Card key={index} style={{ width: "300px", backgroundColor: "#f5f5f5" }}>
                  <CardContent>
                    <Typography variant="h5">{project}</Typography>
                  </CardContent>
                  <CardContent style={{ textAlign: "right" }}>
                    <Button variant="contained" component={Link} to="/submissions">
                      VIEW
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default MentorDashboard;