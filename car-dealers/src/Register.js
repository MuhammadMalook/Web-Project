
import { Link, useHistory } from 'react-router-dom'
import "./Styles/Register.css";
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";
//import { Button } from "react-bootstrap";

import React, { useState  } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';


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

const Register = () => {
  const history = useHistory()
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    fetch('/signup',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name: firstName ,
        email,
        password
      })
    }).then(res=>res.json()).then(data=>{
      if(data.error)
      {
        console.log(data.error)
      }
      else{
        history.push("/Login")
      }
    })
    console.log(firstName,  email, password);
    //handleClose();
  };


  return (
    <div className={classes.mydiv}>

      <div className="container bg-dark">
          
      <div className="card" >
        <div className="card-body">
          <h5 className="text-center display-4" style={{color:"Blue",fontFamily:"sans-serif"}}>SIGNUP PAGE</h5>
          <form className={classes.root}  >
        <TextField
          label="Full Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      
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
            Signup
          </Button>
        </div>
        <span style={{color:'blue'}}>Already have an account</span><Link to="/Login" style={{display:'inline-block'} }variant="outline-primary">sign in</Link>
      </form>

    
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;