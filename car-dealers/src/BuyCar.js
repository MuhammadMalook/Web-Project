import "semantic-ui-css/semantic.min.css";
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

const BuyCar = () => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carName, setCarName] = useState('');
  const [model, setModel] = useState('');

  const cars = [
    {
      value:'Select Car',
      label:'Select Car',
    },
    {
      value: 'Civic',
      label: 'Civic',
    },
    {
      value: 'Accord',
      label: 'Accord',
    },
    {
      value: 'Brv',
      label: 'Brv',
    }
  ]

  const handleSubmit = e => {


    fetch('/add-user-car',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        name:firstName,
        nic,
        phone,
        email,
        carName,
        model
      })}).then(result=>result.json()).then(data=>{
        if(data.error)
        {
          console.log(data.error)
        }
        else{
          console.log(data)
        }
      })


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
        <TextField
          id="filled-select-currency-native"
          select
          label="Select Car"
          value={carName}
          onChange={e=>setCarName(e.target.value)}
          SelectProps={{
            native: true,
          }}
          variant="filled"
        >
          {cars.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
        
        <TextField
          label="Model"
          variant="filled"
          type="text"
          required
          value={model}
          onChange={e => setModel(e.target.value)}
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

export default BuyCar;