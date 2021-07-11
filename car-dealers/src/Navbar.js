
import React,{useEffect} from 'react';
import { Link, BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import { NavDropdown } from 'react-bootstrap'
import Register from './Register';
import Dashboard from './Dashboard';
import BuyCar from './BuyCar';
import Main from './Main'
import Login from './Login'
import BuySpare from './BuySpare';
import SpareParts from './SpareParts';
import Civic from './Civic';
import Accord from './Accord';
import BRV from './BRV';
import logo from './car-logo.svg'
import './index.css'
import Footer from './Footer'
import AddCar from './AddCar';
import AddSpare from './AddSpare';
import BuySpare_1 from './BuySpare_1';
import BuyCar_1 from './BuyCar_1';
import Contact from './Contact'
import About from './About';
import Coursel from './Coursel';

function Routing(){
const history = useHistory()

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        if(user)
        {
         
      
        }
        else{
            console.log('user',user)
          history.push('/')
        }
      },[])

    return(
        <Switch>
        <Route exact path="/">
            <Coursel />
        </Route>
        <Route exact path="/Dashboard">
            <Dashboard />
        </Route>
        <Route path="/Car_Reg">
            <BuyCar />
        </Route>
        <Route path="/Register">
            <Register />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/Spare_Part">
            <BuySpare />
        </Route>
        <Route path="/spare">
            <SpareParts />
        </Route>
        <Route path="/Civic">
            <Civic />
        </Route>
        <Route path="/Accord">
            <Accord />
        </Route>
        <Route path="/BRV">
            <BRV />
        </Route>
        <Route path="/AddCar">
            <AddCar />
        </Route>
        <Route path="/AddSpare">
            <AddSpare />
        </Route>
        <Route path="/BuySpare_1">
            <BuySpare_1 />
        </Route>
        <Route path="/BuyCar_1">
            <BuyCar_1 />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        
    </Switch>
    )
}

export default function NavBar() {
    const history = useHistory()
    const logout = () =>
    {
        
        localStorage.clear();
        history.push('/')
        window.location.reload()
    }
    const isUser = JSON.parse(localStorage.getItem("user"));
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

                <div className="container-fluid">

                    <div className="navbar-header">
                        <img src={logo} width="50" height="50" className="filter-green"></img>
                    </div>
                    <button data-target="#main-menu" data-toggle="collapse" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="main-menu" className="collapse navbar-collapse">
                        <ul className="navbar-nav ">
                            { isUser? (<li className="nav-item ml-4"><Link to="/Dashboard" className="nav-link">Dashboard</Link></li>) : ("")}
                            <li className="nav-item ml-4"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item ml-4"><Link to="/Civic" className="nav-link">Civic</Link></li>
                            <li className="nav-item ml-4"><Link to="/Accord" className="nav-link">Accord</Link></li>
                            <li className="nav-item ml-4"><Link to="/BRV" className="nav-link">BR-V</Link></li>
                            <NavDropdown title="Online_Registration" id="basic-nav-dropdown" className="text-light ml-4">
                                <NavDropdown.Item as={Link} to={"./Car_Reg"} >Car Registration</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"./Spare_Part"}>Spare_Parts</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <li className="nav-item ml-4"><Link to="/spare" className="nav-link">Spare Parts</Link></li>
                            <li className="nav-item ml-4"><Link to="/contact" className="nav-link">Contact Us</Link></li>
                            <li className="nav-item ml-4"><Link to="/about" className="nav-link">About Us</Link></li>

                        </ul>
                        <div className="ml-auto">
                            <div class="right floated six wide column text-center loginRegisterArea ">
                                <div class="ui labeled button" tabindex="0">
                               {isUser? (<Link to="/Logout" class="ui blue button" onClick={logout}>
                                        <i class="sign-in icon text-dark"></i>Logout
                                    </Link>):(<><Link to="/Login" class="ui blue button">
                                        <i class="sign-in icon text-dark"></i>Login
                                    </Link>
                                    <Link to="/Register" class="ui basic blue left pointing label">
                                    <i class="sign-out icon text-dark"></i>Register
                                </Link></>)}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </nav>
           <Routing />
        </Router>
    );
}




