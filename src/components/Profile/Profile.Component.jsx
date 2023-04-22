import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { login, logout } from '../../utils/utils.js';
import { Slide, ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(!editable);
  }

  function RemoveToken() {
    localStorage.removeItem('token');
    window.history.pushState(null, null, 'http://localhost:3000/login');
    window.dispatchEvent(new Event('popstate'));
    toast.success('Successfully Signed Out !', {
      position: "top-center",
      autoClose: 4000,
      transition: Slide,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <>
      <div>
      <div className='flex gap-2 mt-3'>
        <h1 className='text-2xl font-bold my-1 mr-4'>Profile</h1>
        <Link to='/profile'>
          <button className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white" onClick={handleEditClick}>
            {editable ? 'Save Profile' : 'Edit Profile'}
          </button>
        </Link>
        </div>
        <TableContainer className='mt-8 border-2' sx={{ maxWidth: 1000 }}>
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
                <TableCell>NGO Name</TableCell>
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
                    ) : ( <>
                  <Link to='/profile' >
                    <button onClick={login} className="rounded text-black p-2 mr-3 border-2 border-black hover:bg-black hover:text-white">Link Near ID</button>
                  </Link>
                  <Link to='https://wallet.testnet.near.org/create' target='_blank'>
                    <button className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white"  >Create Near ID</button>
                  </Link></>
                  )}
                </TableCell>
                {window.localStorage.getItem('undefined_wallet_auth_key') && (
                <>
                <TableCell><Link to='https://wallet.testnet.near.org/' target='_blank'><button className="rounded text-black p-2 mr-4 border-2 border-black hover:bg-black hover:text-white" >Open Near Wallet</button></Link></TableCell>
                <TableCell><button onClick={logout} className="rounded text-black p-2 mr-4 border-2 border-black hover:bg-black hover:text-white" >Unlink Near ID</button></TableCell>
                </>
                )}
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <div className='flex gap-2 mt-3'>
          <button className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white"  onClick={RemoveToken}>
            Sign Out
          </button>
          <Link to='/changepassword'>
            <button className="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white">
              Change Password
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
