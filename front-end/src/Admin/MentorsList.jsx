import React, { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import MentorDisplay from '../components/MentorDisplay';
import Footer from '../components/Footer';
import AddMenterModal from '../components/AddMenterModal';
import axiosInstance from '../axiosInterceptor';


const MentorsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = () => {
    axiosInstance.get('/api/project/topics')
      .then((res) => {
        setTopics(res.data);
      })
      .catch((error) => {
        console.error('Error fetching project topics:', error);
      });
  };

  return (
    <>
    <div className="mentors-list-container" style={{minHeight:'80vh'}}>
      <AdminNavbar />
      <div className="mentor-display-container" >
        <MentorDisplay />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MentorsList;