import logo from './logo.svg';
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import React,{useEffect} from 'react';
import {BrowserRouter,Switch,Route, useHistory } from "react-router-dom";
import Dashboard from './Dashboard';
import NavBar from './Navbar';
import Footer from './Footer';



function App(){
  
    return ( <>
      <NavBar/>
        <Footer/>
        </>
    );

}

export default App;
