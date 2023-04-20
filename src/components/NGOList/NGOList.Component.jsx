import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from 'react-router-dom';

const NGOList = () => {

  return (
    <>
      <div>
      <h1 className='text-2xl font-bold my-1 mt-3 mr-4'>Approve NGOs</h1>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 1000 }}>
            <Table>
            <TableHead className='bg-gray-300'>
            <TableRow>
                <TableCell align='center'>Sr. No.</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>Email ID</TableCell>
                <TableCell align='center'>Approve NGO</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'><Link to='/ngoapproval'><button class="rounded text-green-600 py-2 px-6 border-2 border-green-600 hover:bg-green-600 hover:text-white"><AddTaskIcon /></button></Link></TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'><Link to='/ngoapproval'><button class="rounded text-green-600 py-2 px-6 border-2 border-green-600 hover:bg-green-600 hover:text-white"><AddTaskIcon /></button></Link></TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <h1 className='text-2xl font-bold my-1 mt-6 mr-4'>Approved NGOs</h1>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 1000 }}>
            <Table>
            <TableHead className='bg-gray-300'>
            <TableRow>
                <TableCell align='center'>Sr. No.</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>Email ID</TableCell>
                <TableCell align='center'>Remove NGO</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>NGO Name</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    </>
  );
};

export default NGOList;
