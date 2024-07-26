import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import axiosInstance from '../axiosInterceptor';
import AdminForm from '../components/AdminForm';
import Footer from '../components/Footer';

const AddMentor = () => {
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
    
    <div>
      <AdminNavbar />
      <br />
      <br />
      <AdminForm method="post" topics={topics} data={{ Name: "", Email: "", PhoneNumber: "", Password: "", ProjectTopic: "" }} />
    </div>
    <Footer/>
    </>

  );
};

export default AddMentor;