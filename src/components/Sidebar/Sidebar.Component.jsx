import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
      <Divider />
        <List>
          <Link to="/profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider />
          <Link to="/inprogresscourses">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PendingIcon />
              </ListItemIcon>
              <ListItemText primary="In-Progress Courses" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider />
          <Link to="/completedcourses">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary="Completed Courses" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider />
          <Link to="/uploadedcourses">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DriveFolderUploadIcon />
              </ListItemIcon>
              <ListItemText primary="Uploaded Courses" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Divider />
          <Link to="/students">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="NGO / NPO Students" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}