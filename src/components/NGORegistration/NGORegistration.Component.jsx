import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ipfs from '../../utils/ipfs';
import { Slide, toast } from 'react-toastify';
import { MuiFileInput } from 'mui-file-input';

const theme = createTheme();

export default function NGORegistration() {

  const [imageUpload, setImageUpload] = useState(false);
  const [file, setFile] = React.useState(null);

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    name:'',
    phone:'',
    location:'',
    documentUrl: '',
  });

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await ipfs.add(file);
      const ImgHash = `https://ipfs.io/ipfs/${response.path}`;
      toast.success('Document Uploaded Successfully !', {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      setSignUpData({
        ...signUpData,
        documentUrl: ImgHash,
      });
      setImageUpload(true);
    } catch (error) {
      toast.error('Document Upload Failed !', {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://127.0.0.1:5000/ngo/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    })
      .then((response) => {
        // handle successful response
        if (!response.ok) {
          throw new Error(response.status);
        }
        window.history.pushState(null, null, 'http://localhost:3000/login');
        window.dispatchEvent(new Event('popstate'));
      })
      .catch((error) => {
        // handle error response
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            NGO Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="NGO Name"
                  id="ngoname"
                  autoComplete="ngoname"
                  autoFocus
                  value={signUpData.name}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={signUpData.email}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phoneNumber"
                  value={signUpData.phone}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, phone: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="Location"
                  id="location"
                  autoComplete="location"
                  value={signUpData.location}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, location: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={8}>
              <MuiFileInput
              value={file}
              placeholder='Upload Image'
              onChange={handleChange}
              disabled={imageUpload}
              />
              </Grid>
              <Grid item xs={12} sm={4} className='text-center'>
              <button
              className='px-4 py-2 mt-2 border border-2 rounded border-blue-400 hover:bg-gray-200'
              onClick={(e) => handleUpload(e)}>
              Upload
              </button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(event) => handleSubmit(event)}
            >
              Sign Up
            </Button>
            <Link to='/'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Back To Home
            </Button>
            </Link>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/login' variant="body2" className='underline text-blue-600 hover:text-blue-500'>
                  {"Already Have An Account? Sign In"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}