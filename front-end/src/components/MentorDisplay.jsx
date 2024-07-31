import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, colors, Typography } from "@mui/material";
import AdminForm from "./AdminForm";
import axiosInstance from "../axiosInterceptor";
import '../style/MentorDisplay.css'; // Import CSS file for styling
import ConfirmModal from "./ConfirmModal";
import AddMenterModal from "./AddMenterModal";

const MentorDisplay = () => {
  const [mentor, setMentor] = useState([]);
  const [up, setUp] = useState(false);
  const [singleVal, setSingleVal] = useState([]);
  const [topics, setTopics] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [mentorId, setMentorId] = useState(null);

  
  const tableStyle = {
    tableHeader:{
      backgroundColor:"#004080",
      color:"#fff"
    },
    tableHeaderCell:{
      color:"#fff",
      textAlign: 'center'
    }
  }

  useEffect(() => {
    axiosInstance.get("/api/mentors").then((res) => {
      setMentor(res.data);
    });

    axiosInstance.get("/api/project/topics").then((res) => {
      setTopics(res.data);
    });
  }, []);

  const handleDelete = () => {
    axiosInstance
      .delete(`/api/remove/${mentorId}`)
      .then((response) => {
        if(response.status){
          alert(response.data.message);
          setMentor((prevMentor) =>
            prevMentor.filter((mentor) => mentor._id !== mentorId));
          setshowModal(false)
          }else{
            alert('Oops! Something went wrong');
            setshowModal(false);
          }
        
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const updateVal = (item) => {
    setUp(true);
    setSingleVal(item);
    console.log(item)
  };

  const updateArray = (updatedObj)=>{
    // console.log(updatedObj?._id)
    // console.log(mentor)
    const mentorArrayCopy = [...mentor];
    var updatedArray = mentorArrayCopy.map(item=>item?._id === updatedObj?._id ? updatedObj : item)
    setMentor(updatedArray);
  }

  let FinalJSX = (
    <div className="mentor-display-container" style={{ paddingLeft:0, paddingRight:0 }}>
      <AddMenterModal  method="post" topics={topics} data={{ Name: "", Email: "", PhoneNumber: "", Password: "", ProjectTopic: ""}} />
      <Typography
        variant="h4"
        className="mentor-display-heading mb-3"
      >
        MENTORS      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="simple table">
          <TableHead style={tableStyle?.tableHeader}>
            <TableRow style={tableStyle?.tableHeader}>
              <TableCell style={tableStyle?.tableHeaderCell}>Name</TableCell>
              <TableCell style={tableStyle?.tableHeaderCell}>Email</TableCell>
              <TableCell style={tableStyle?.tableHeaderCell}>Phone Number</TableCell>
              <TableCell style={tableStyle?.tableHeaderCell}>Project Topic</TableCell>
              <TableCell colSpan={2} style={tableStyle?.tableHeaderCell}> Action</TableCell>
              {/* <TableCell style={tableStyle?.tableHeaderCell}></TableCell> */}
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
                    // onClick={() => handleDelete(item._id)}
                    onClick={()=>{setshowModal(true); setMentorId(item._id)}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
{   showModal ?   <ConfirmModal hide={()=>setshowModal(false)} handleDelete={()=>handleDelete()}/>
 : null
}   
{up ? <AddMenterModal open={true}  method="put" data={singleVal} topics={topics} hide={()=>setUp(false)} updateArray = {(obj)=>updateArray(obj)}/> 
:null} 


 </div>
  );


  return FinalJSX;
};

export default MentorDisplay;