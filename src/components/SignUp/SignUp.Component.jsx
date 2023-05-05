import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast, Slide } from 'react-toastify';

const theme = createTheme();

export default function SignUp() {
  const [signUpData, setsignUpData] = useState({
    email: '',
    password: '',
    accesscode: '',
  });

  const [credentials, setCredentials] = useState({
    check: false,
  });

  const inputChanged = () => {
    if (!credentials.check) {
      setCredentials({ ...credentials, check: true });
    } else {
      setCredentials({ ...credentials, check: false });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const check = credentials;
    const { email, password, accesscode } = signUpData;
    if (!email || !password) {
      toast.error('Kindly Fill All The Required Details.', {
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
        return
    }
    await fetch('http://127.0.0.1:5000/user/register', {
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
        toast.success("Successfully Signed Up !", {
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
      })
      .catch((error) => {
        // handle error response
        toast.error("Kindly Try Again !", {
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
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={signUpData.email}
                  onChange={(e) =>
                    setsignUpData({ ...signUpData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={signUpData.password}
                  onChange={(e) =>
                    setsignUpData({ ...signUpData, password: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='Do You Belong To An NGO ?'
                  name='check'
                  value={credentials.check}
                  onChange={inputChanged}
                />
              </Grid>
              {credentials.check && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='accessCode'
                    label='Access Code'
                    name='accessCode'
                    autoComplete='family-name'
                    value={signUpData.accesscode}
                    onChange={(e) =>
                    setsignUpData({ ...signUpData, accesscode: e.target.value })
                  }
                  />
                </Grid>
              )}
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={(event) => handleSubmit(event)}
            >
              Sign Up
            </Button>
            <Link to='/'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 1, mb: 2 }}
              >
                Back To Home
              </Button>
            </Link>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link
                  to='/login'
                  variant='body2'
                  className='underline text-blue-600 hover:text-blue-500'
                >
                  {'Already Have An Account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
