import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import MentorDisplay from '../components/MentorDisplay';
import Footer from '../components/Footer';


const MentorsList = () => {
  return (
    <>
    <div className="mentors-list-container">
      <AdminNavbar />
      <div className="mentor-display-container">
        <MentorDisplay />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MentorsList;