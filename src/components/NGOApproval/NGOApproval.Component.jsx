import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

const NGOApproval = () => {

  return (
    <>
      <div>
      <h1 className='text-2xl font-bold my-1 mt-3 mr-4'>Approve This NGO ?</h1>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 1000 }}>
            <Table>
            <TableBody>
            <TableRow>
                <TableCell align='center' className='bg-gray-300 w-1/3'>NGO Name</TableCell>
                <TableCell align='center'>ABC XYZ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center' className='bg-gray-300'>Username</TableCell>
                <TableCell align='center'>@abc</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center' className='bg-gray-300'>Email Address</TableCell>
                <TableCell align='center'>abc@ngo.com</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center' className='bg-gray-300'>Phone Number</TableCell>
                <TableCell align='center'>+91 90000 0XXXX</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center' className='bg-gray-300'>Location</TableCell>
                <TableCell align='center'>Mumbai</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center' className='bg-gray-300'>Uploaded ID Proof</TableCell>
                <TableCell align='center'><Link to='/url' target='_blank'><VisibilityIcon className='mr-2'/>View</Link></TableCell>
            </TableRow>
            <TableRow align='center'>
                <TableCell align='center' className='bg-gray-300'>Want To Approve This NGO ?</TableCell>
                <TableCell align='center'><Link to='/ngolist'><button class="rounded text-green-600 py-2 px-6 mr-4 border-2 border-green-600 hover:bg-green-600 hover:text-white"><AddTaskIcon /></button></Link><Link to='/ngolist'><button class="rounded text-red-600 py-2 px-6 border-2 border-red-600 hover:bg-red-600 hover:text-white"><CancelIcon /></button></Link></TableCell>
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </div>
    </>
  );
};

export default NGOApproval;
