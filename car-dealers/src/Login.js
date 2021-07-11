import { Link, useHistory } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";
//import { Button } from "react-bootstrap";

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),


    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  // mydiv:{
  //   backgroundColor:'gray',
  //   display:'flex',
  //   justifyContent: 'center',
  //   width: '350px',
  //   alignItems: 'center',
  //   marginLeft:'500px'

  // }
}));

const Login = () => {

  const history = useHistory()
  const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
  

    fetch('/signin',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        console.log(data.error)
      }
      else {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        console.log("login successfully")
        history.push('/Dashboard');
        window.location.reload();
      }
    }).catch(err => {
      console.log(err)
    })



  
  };

  return (
    <div className={classes.mydiv}>

      <div className="container bg-dark">
          
      <div className="card" >
        <div className="card-body">
          <h5 className="text-center display-4" style={{color:"Blue",fontFamily:"sans-serif"}}>LOGIN PAGE</h5>
          <form className={classes.root}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>

          <Button variant="contained" className="lg" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </form>
    
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;