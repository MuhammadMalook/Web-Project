import "semantic-ui-css/semantic.min.css";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { model, models } from "mongoose";
import { Form } from "react-bootstrap";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    
    formControl: {
      margin: theme.spacing(2),
      width:'600px',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  xyz: {
    '& > *': {
      margin: theme.spacing(1),
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

const AddCar = () => {
  const classes = useStyles();
  // create state variables for each input
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
  const [carName, setCarName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  const [photo, setPhoto] = useState('');

  const handleSubmit = e => {

    const pic = new FormData()
    pic.append("file", photo)
    pic.append("upload_preset", "car-dealers")
    pic.append("cloud_name", "djzufotuv")



    fetch("https://api.cloudinary.com/v1_1/djzufotuv/image/upload", {
      method: "post",
      body: pic
    }).then(res => res.json()).then((result) => {


      console.log(result.url)


    fetch('/addcar',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        name:carName,
        model,
        photo:result.url,
        price
      })}).then(result=>result.json()).then(data=>{
        if(data.error)
        {
          console.log(data.error)
        }
        else{
          console.log(data)
        }
      })

  })
}



  const selectImage = e => {
    const imageFile = e.target.files[0];
    setPhoto(imageFile);
  }

  return (
    <div className={classes.mydiv}>

      <div className="container bg-dark">

        <div className="card" >
          <div className="card-body">
            <h5 className="text-center display-4" style={{ color: "Blue", fontFamily: "sans-serif" }}>Buy Car</h5>
            <form className={classes.root}>
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
          

              <TextField
                label="Price"
                variant="filled"
                type="text"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <input accept="image/*" id="icon-button-file"
                type="file" style={{ display: 'none' }}
                onChange={e => selectImage(e)}
              />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture"
                  component="span">
                  <PhotoCameraIcon className='btn-outline-dark' style={{ fontSize: 40 }} />
                </IconButton>
              </label>




              <div>

                <Button variant="contained" className="lg" color="primary" onClick={() => {
                  if (photo) {
                    handleSubmit()
                  }
                  else {
                    console.log("select photo")
                  }
                }}>
                  ADD CAR
                </Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;