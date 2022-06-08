import React, { useEffect, useState } from 'react'
import styles from '../styles/AddUser.module.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAddUser, getApiUpdate, getUpdatedDetails } from '../action/action';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const paramsID=useParams();
  console.log('ParamsId',paramsID);

  const edit_data=useSelector((state)=>state.userRed.selectedUser);
  console.log('Edit Datta',edit_data);

  useEffect(()=>{
    dispatch(getApiUpdate(paramsID.id))
  },[]);

  useEffect(()=>{
    if(edit_data){
      setinputs({...edit_data})
    }
  },[edit_data]);

  const[inputs,setinputs]=useState({
    name:'',
    rollno:''
  });
  // const {name,rollno} =inputs;
  const submitUserDetails=(e)=>{
    e.preventDefault();
    console.log('UserValues',inputs);
    if(paramsID.id){
      dispatch(getUpdatedDetails(paramsID.id,inputs))
    }
    else{
      dispatch(getAddUser(inputs));
    }
    navigate('/');
  }
  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs((last)=>{
      return{
        ...last,
        [name]:value
      }
    })
  }
  // (e)=>setinputs(e.target.value)
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.heading}>{paramsID.id?'Edit':'Add'} User</h1>
        <form onSubmit={submitUserDetails}>
        <div className={styles.inputText}>
          <input name='name' value={inputs.name || ''} type='text' placeholder='Enter your name' onChange={inputEvent} />
        </div>
        <div className={styles.inputText}>
          <input name='rollno' value={inputs.rollno || ''} type='number' placeholder='Enter your roll number' onChange={inputEvent} />
        </div>
        <div className={styles.btn}> 
          <Button onClick={()=>navigate('/')} type='button' variant="contained">Home</Button>
          <Button type='submit' variant="contained">Submit</Button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser