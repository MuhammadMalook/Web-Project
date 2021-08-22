import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,
    Switch,Route,Link} from 'react-router-dom';
import './index.css'

const FooterContainer=styled.footer`
 .footer-middle{
    background: var(--mainDark );
    padding-top:3rem;
    color: var(--mainWhite);
}
.footer-bottom{
padding-top:3rem;
padding-bottom:2rem;
}
ul li {
    color: var(--mainWhite);
}
ul li: hover{
    color: var(--mainLightGrey);
}`;
function Footer()
{
    return(
<FooterContainer className="main-footer">
        <div className="footer-middle">

    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6">
            <h4 ><b>About Us</b></h4>
            <ul>             
                     <li>Honda Atlas Cars</li>
                     <li>Financial Reports</li>
                     <li>Sitemap</li>     
                 </ul>
            </div>
            
            <div className="col-md-3 col-sm-6">
                 <h4><b> Honda Vehicles</b></h4>
                 <ul>
                     <li as={Link} to={"./Civic"}>Civic</li>
                     <li>Accord</li>
                     <li>BR-V</li>                 
                 </ul>
           </div>
            
    
            <div className="col-md-3 col-sm-6">
                 <h4><b>Services</b></h4>
                 <ul>
                     <li>Car Registration</li>
                     <li>Spare Parts</li>           
  
                 </ul>
            </div>
            
          
            <div className="col-md-3 col-sm-6">
                 <h4><b>Help & Support</b></h4>
                 <ul>
                     <li>Contact Us</li>
                     
                 </ul>

                 </div>
            </div>
            
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Car DealerShip WebApp -All Rights Reserved
                </p>
            </div>
        </div>
      </div>
        </FooterContainer>
    )
}
export default Footer;

