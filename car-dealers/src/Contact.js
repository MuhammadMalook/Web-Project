import React from 'react'
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_O8R6B0ClHWEj4FV3P0sW9");

export default function Contact()
{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ne6j73r', 'template_hbn30rm', e.target, 'user_O8R6B0ClHWEj4FV3P0sW9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return(
        <div style={{
            backgroundColor:"black",
        }}>
            <div className="container border"
            style={{
                marginTop:"50px",
                width:"100%",
                backgroundImage:`url("https://www.burchcom.com/wp-content/uploads/2019/01/images1997-5c2f99436aa28-1024x683.jpg")`,
                backgroundSize:"cover",
            }}>
            <h1 style={{marginTop:'25px'}}><center><b>Contact Us Form</b></center></h1>

        <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
        <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="name"/>
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="Email_Address" name="email"/>
        </div>
        
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="Subject"/>
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="your message" name="message"></textarea>
        </div>
        <div className="col-8 pt-3 mx-auto">
        <input type="Submit" className="btn btn-info" value="Send Message"/>
        </div>
        </div>

                 
                
                </form>
            </div>
        </div>

    )
}