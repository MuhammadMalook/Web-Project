import "semantic-ui-css/semantic.min.css";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from "react-router-dom";


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

const BuySpare_1 = () => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const location = useLocation
  const handleSubmit = e => {

    fetch('/add-user-spare',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        name:firstName,
        nic,
        phone,
        email,
        carName:location.state.carName,
        spareName:location.state.name
      })}).then(result=>result.json()).then(data=>{
        if(data.error)
        {
          console.log(data.error)
        }
        else{
          console.log(data)
        }
      })
    // console.log(firstName, lastName, email, password);

  };

  return (
    <div className={classes.mydiv}>

      <div className="container bg-dark">
          
      <div className="card" >
        <div className="card-body">
          <h5 className="text-center display-4" style={{color:"Blue",fontFamily:"sans-serif"}}>Buy Car Spare Part</h5>
          <form className={classes.root}>
        <TextField
          label="Full Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="nic"
          variant="filled"
          required
          value={nic}
          onChange={e => setNic(e.target.value)}
        />
        <TextField
          label="Phone"
          variant="filled"
          type="text"
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <TextField
          label="email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div>

          <Button variant="contained" className="lg" color="primary" onClick={handleSubmit}>
            Signup
          </Button>
        </div>
      </form>
    
        </div>
      </div>
      </div>
    </div>
  );
};

export default BuySpare_1;