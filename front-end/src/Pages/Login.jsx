import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Container, Grid, Typography, TextField, Button, CircularProgress, InputAdornment, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axiosInstance from '../axiosInterceptor';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setEmailError('');
    setPasswordError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      setLoading(false);
      return;
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post('/api/auth/login', {
        Email: email,
        Password: password,
      });
      setLoading(false);
      const { success, role, adminId, userId, message } = response.data;
      console.log(response.data);
      if (success) {
        if (role === 'Admin') {
          login('admin'); // Call the login function with the 'admin' role
          navigate('/admin');
        } else if (role === 'Mentor') {
          login('mentor'); // Call the login function with the 'mentor' role
          navigate(`/mentor/${userId}`);
        } else {
          setError('Invalid role');
        }
      } else {
        setError(message);
      }
    } catch (error) {
      setLoading(false);
      setError('Error logging in');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 64px)', paddingBottom: '40px', marginTop: '80px' }}>
        <Container maxWidth="xl" py={5}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  padding: '32px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  style={{ backgroundColor: 'lightblue', color: 'black', height: '50px', borderRadius: '5px', paddingTop: '7px' }}
                >
                  LOGIN
                </Typography>
                <br />
                <form onSubmit={handleLogin}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!passwordError}
                    helperText={passwordError}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
                    {loading ? <CircularProgress size={24} /> : 'Log in'}
                  </Button>
                  {error && <Typography variant="body1" color="error" align="center" mt={2}>{error}</Typography>}
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Login;