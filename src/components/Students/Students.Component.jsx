import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Students = () => {

  return (
    <>
      <div>
        <button class="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white">Access Code</button>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 850 }}>
            <Table>
            <TableHead className='bg-gray-300'>
            <TableRow>
                <TableCell align='center'>Username</TableCell>
                <TableCell align='center'>Email ID</TableCell>
                <TableCell align='center'>Full Name</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>@username</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    </>
  );
};

export default Students;
