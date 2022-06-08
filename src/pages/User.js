import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData, getApiDelete } from '../action/action';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const User = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getApiData())
    },[]);
    const api_Data=useSelector((state)=>state.userRed.user);
    // console.log('datas',api_Data);
    const handleEdit=(id)=>{
      navigate(`/edituser/${id}`);
    }

  return (
    <div>
        <div style={{margin:'20px 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button onClick={()=>navigate('/adduser')} variant="contained" color="success">
                Add User
            </Button>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">ROLL NO</TableCell>
            <TableCell align="center">DELETE</TableCell>
            <TableCell align="center">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {api_Data.map((userData) => (
            <TableRow
              key={userData.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {userData.name}
              </TableCell>
              <TableCell align="center">{userData.rollno}</TableCell>
              <TableCell align="center"><Button onClick={()=>dispatch(getApiDelete(userData.id))} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
              <TableCell align="center"><Button onClick={()=>handleEdit(userData.id)} variant="outlined" startIcon={<EditIcon />}>Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default User