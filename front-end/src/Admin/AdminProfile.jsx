import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Content from '../admincomponents/Content';
import '../style/AdminProfile.css';
import Footer from '../components/Footer'

const AdminProfile = () => {
  return (
    <>
    <div className="admin-profile-container">
      <AdminNavbar />
      <div className="dashboard">
        <div className="dashboard-content">
          <Content />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdminProfile;