import "semantic-ui-css/semantic.min.css";
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
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

const BuyCar_1 = (props) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const location = useLocation();
  const handleSubmit = e => {    
    //console.log(location.state._id)
    fetch('/add-user-car',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        name:firstName,
        nic,
        phone,
        email,
        carName:location.state.name,
        model:location.state.model
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
          <h5 className="text-center display-4" style={{color:"Blue",fontFamily:"sans-serif"}}>Buy Car</h5>
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
            Buy
          </Button>
        </div>
      </form>
    
        </div>
      </div>
      </div>
    </div>
  );
};

export default BuyCar_1;