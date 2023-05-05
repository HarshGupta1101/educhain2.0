import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const Students = () => {

  return (
    <>
      <div>
        <div className='flex gap-2 mt-3'>
            <h1 className='text-2xl font-bold my-1 mr-4'>NGO Students</h1>
            <button class="rounded bg-orange-400 text-white p-2 hover:text-orange-400 hover:bg-white hover:border-2 hover:border-orange-400">NGO Access Code</button>
        </div>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 1000 }}>
            <Table>
            <TableHead className='bg-gray-300'>
            <TableRow>
                <TableCell align='center'>Sr. No.</TableCell>
                <TableCell align='center'>Username</TableCell>
                <TableCell align='center'>Email ID</TableCell>
                <TableCell align='center'>Full Name</TableCell>
                <TableCell align='center'>Remove Student</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>5</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>6</TableCell>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
                <TableCell align='center'> <button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><DeleteIcon /></button> </TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    </>
  );
};

export default Students;
