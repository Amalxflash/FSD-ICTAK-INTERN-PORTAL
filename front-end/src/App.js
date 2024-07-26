import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MentorDashboard from './Mentor/MentorDashboard';
import AddMentor from './Admin/AddMentor';
import MentorsList from './Admin/MentorsList';
import ReferenceMaterial from './Mentor/ReferenceMaterial';
import AdminProfile from './Admin/AdminProfile';
import AddSubmissions from './Pages/AddSubmissions';
import SubmissionList from './Mentor/SubmissionList';
import SubmissionView from './Mentor/SubmissionView';
import Projects from './Admin/Projects';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddSubmissions />} />
      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addmentor"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AddMentor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Projects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mentors"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <MentorsList />
          </ProtectedRoute>
        }
      />
      {/* Mentor Routes */}
      <Route
        path="/reference-material"
        element={
          <ProtectedRoute allowedRoles={['mentor']}>
            <ReferenceMaterial />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mentor/:id"
        element={
          <ProtectedRoute allowedRoles={['mentor']}>
            <MentorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/submissions"
        element={
          <ProtectedRoute allowedRoles={['mentor']}>
            <SubmissionList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewsubmissions/:studentId"
        element={
          <ProtectedRoute allowedRoles={['mentor']}>
            <SubmissionView />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;