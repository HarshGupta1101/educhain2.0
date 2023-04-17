import React from 'react';
import Dashboard from '../components/Sidebar/Sidebar.Component';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

const ProfilePage = () => {

  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
            <h1 className='text-2xl font-bold my-3'>Profile</h1>
            <Link to='/profile'>
            <button class="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white">Edit Profile</button>
            </Link>
            <TableContainer className='mt-8 border-2' sx={{ maxWidth: 850 }}>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell><TextField placeholder={'Enter User Name'} color={'warning'} disabled></TextField></TableCell>
                  <TableCell>Email ID</TableCell>
                  <TableCell><TextField placeholder={'Enter Email ID'} color={'warning'} disabled></TextField></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell><TextField placeholder={'Enter Full Name'} color={'warning'} disabled></TextField></TableCell>
                  <TableCell>Area Of Interest</TableCell>
                  <TableCell><TextField placeholder={'Enter Area Of Interest'} color={'warning'} disabled></TextField></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Organization Name</TableCell>
                  <TableCell><TextField placeholder={'Enter Organization Name'} color={'warning'} disabled></TextField></TableCell>
                  <TableCell>NGO / NPO Name</TableCell>
                  <TableCell><TextField placeholder={'Enter NGO / NPO Name'} color={'warning'} disabled></TextField></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NEAR ID</TableCell>
                  <TableCell>
                  <Link to='/profile' >
                    <button class="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white">Link Near Wallet</button>
                  </Link>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          </div>

          <div className='lg:w-1/5 p-4 bg-white rounded'>
            <div>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
