import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { login, logout } from '../../utils/utils.js';

const Profile = () => {
  
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(!editable);
  }

  return (
    <>
      <div>
        <Link to='/profile'>
          <button className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white" onClick={handleEditClick}>
            {editable ? 'Save Profile' : 'Edit Profile'}
          </button>
        </Link>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 850 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter User Name'} color={'warning'} disabled={!editable} />
                </TableCell>
                <TableCell>Email ID</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter Email ID'} color={'warning'} disabled={!editable} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter Full Name'} color={'warning'} disabled={!editable} />
                </TableCell>
                <TableCell>Area Of Interest</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter Area Of Interest'} color={'warning'} disabled={!editable} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Organization Name</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter Organization Name'} color={'warning'} disabled={!editable} />
                </TableCell>
                <TableCell>NGO / NPO Name</TableCell>
                <TableCell>
                  <TextField placeholder={'Enter NGO / NPO Name'} color={'warning'} disabled={!editable} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NEAR ID</TableCell>
                <TableCell>
                  {window.localStorage.getItem(
                      'undefined_wallet_auth_key'
                    ) ? (
                      JSON.parse(
                        window.localStorage.getItem('undefined_wallet_auth_key')
                      ).accountId
                    ) : (
                  <Link to='/profile' >
                    <button onClick={login} className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white"  >Link Near ID</button>
                  </Link>
                  )}
                  {window.localStorage.getItem('undefined_wallet_auth_key') && (
                    <button onClick={logout} className="rounded text-black p-2 mx-4 border-2 border-black hover:bg-black hover:text-white" >Unlink Near ID</button>
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Profile;
