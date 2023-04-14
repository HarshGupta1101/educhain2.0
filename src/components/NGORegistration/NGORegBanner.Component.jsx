import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CampaignIcon from '@mui/icons-material/Campaign';

const theme = createTheme();

export default function NGOReg() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {/* Hero unit */}
        <Box 
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 4,
            borderRadius: '20px'
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              fontWeight={'400'}
            >
            <h2 className='text-3xl font-bold text-gray-800 sm:ml-3 ml-0 mb-6'>
                Calling Out All The NGOs & NPOs To Join Us Today <CampaignIcon fontSize="large" />
            </h2>
            </Typography>
            <Link to='/ngoregistration'>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" style={{color: "black", borderColor: "black"}}>Register Now</Button>
            </Stack>
            </Link>
          </Container>
        </Box>
    </ThemeProvider>
  );
}