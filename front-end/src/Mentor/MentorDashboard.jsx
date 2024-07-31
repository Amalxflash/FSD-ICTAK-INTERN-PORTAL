import React, { useState, useEffect } from "react";
import MentorNavbar from "../components/MentorNavbar";
import axiosInstance from "../axiosInterceptor";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Button, Typography, Table, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import Footer from "../components/Footer";
import { red } from "@mui/material/colors";

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


  useEffect(()=>{
if(showProjects){
  window.scrollTo(0, document.body.scrollHeight)
}
  },[showProjects])

  return (
    <>
      <MentorNavbar />
      <div style={{  display: "flex", backgroundColor: "#004080",justifyContent: "center", flexDirection: "column", padding: "0 20px" }}>
        <div style={{ borderRadius: "5px", backgroundColor: "#004080", padding: "20px" }}>
          {/* <TableContainer component={Paper} style={{ padding: "10px", border: "1px solid #e3e3cf", borderRadius: "5px", backgroundColor: "rgb(182 182 199)", marginBottom: "20px" }}> */}
            {/* <Table> */}
              {/* <TableRow> */}
              <div>

              <h2 className="display-6 text-light mt-4 pb-2" style={{ fontSize:"30px", color:"white",fontWeight:"700", paddingBottom:"20px" }}>Welcome {mentor?.Name} !</h2>

              </div>

                {/* <TableCell style={{ fontSize: "30px",backgroundColor:"black",color:"white" }}>Welcome, {mentor?.Name} !!</TableCell> */}
              {/* </TableRow> */}
            {/* </Table> */}
          {/* </TableContainer> */}
          <TableContainer component={Paper} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#004080", marginBottom: "5px" }}>
            <Table>
              <TableRow>
                <TableCell style={{ fontSize: "30px",color:"white" }}>Profile</TableCell>
              </TableRow>
              <TableContainer component={Paper} style={{ padding: "10px", border: "1px solid black", borderRadius: "5px", backgroundColor: "white", marginBottom: "20px" }}>
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
                    <TableCell style={{ fontSize: "20px",color:"white" }}>Allotted Projects:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      <Button
                        style={{ backgroundColor: "#95aa92", color: "black" }}
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
          <div style={{ marginTop: "10px" }}>
            <Typography variant="h5" style={{ marginBottom: "15px" ,color:"white", marginLeft:"30px" }}>Allotted Projects</Typography>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" ,marginLeft:"30px"}}>
              {mentor.ProjectTopics.map((project, index) => (
                <Card key={index} style={{ width: "300px", backgroundColor: "#f5f5f5", marginBottom:"20px"}}>
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